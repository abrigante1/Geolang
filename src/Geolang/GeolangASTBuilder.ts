import { GeolangParserVisitor } from "./GeolangParserVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";

import { SketchNode, StatementNode, ImportNode, RelationalExpressionNode, ExpressionNode, IndexExpressionNode, BinaryExpressionNode, MultiplicativeExpressionNode, AdditiveExpressionNode, EqualityExpressionNode, IdentifierExpressionNode, ValueExpressionNode, LiteralExpressionNode, LogNode, RuleExpressionNode, SymbolDefinitionNode, SymbolDeclarationNode, ExpressionSequenceNode } from "./GeolangAST";
import { CompileUnitContext, ImportStatementContext, GeolangParser, ExpressionContext, LogStatementContext, AdditiveExpressionContext, EqualityExpressionContext, MultiplicativeExpressionContext, RelationalExpressionContext, IdentifierExpressionContext, IndexExpressionContext, LiteralExpressionContext, ExpressionStatementContext, RuleCallContext, SymbolDeclarationContext, CommandCallContext, SymbolConditionalDeclarationContext, SymbolDefaultDeclarationContext, SymbolDefinitionContext, ExpressionSequenceContext } from "./GeolangParser";
import { ConsoleErrorListener } from "antlr4ts";

/**
 * Visits the ParseTree and Generates a GeolangAST
 */
export class GeolangASTBuilder extends AbstractParseTreeVisitor<StatementNode> implements GeolangParserVisitor<void> {

    root : SketchNode = new SketchNode();

    protected defaultResult(): ExpressionNode {
        return new ExpressionNode();
    }

    constructor() {
        super();
    }

    visitCompileUnit(ctx : CompileUnitContext) {
        //console.log("--Visit Compile Unit--")
        let statements = ctx.statement();
        for(let statement of statements) {
            this.root.statements.push(this.visit(statement));
        }
    }

    //* Statements

    visitImportStatement(ctx: ImportStatementContext) {
        //console.log("--Visit Import Statement--");

        // Create the Import Node
        let node : ImportNode = new ImportNode();

        // Store the Storage, Path and Symbol
        node.storage = ctx._storage.text;
        node.path    = ctx._path.text.replace(/['"]+/g, '');
        node.symbol  = ctx._symbol.text;

        // Add the Node to the Root 
        return node;
    }

    visitLogStatement(ctx: LogStatementContext) {
        let node : LogNode = new LogNode();
        node.expression = this.visit(ctx.expression());
        return node;
    }

    visitExpressionStatement(ctx: ExpressionStatementContext) {
        return this.visit(ctx.expressionSequence());
    }

    //* Declarations

    visitSymbolConditionalDeclaration(ctx: SymbolConditionalDeclarationContext) {
        let node : SymbolDeclarationNode = new SymbolDeclarationNode();
        node.identifier = ctx._symbol.text;
        node.expression = this.visit(ctx._conditional);
        node.definition = this.visit(ctx.symbolDefinition()) as SymbolDefinitionNode;
        node.default    = false;
        return node;
    }

    visitSymbolDefaultDeclaration(ctx: SymbolDefaultDeclarationContext) {
        let node : SymbolDeclarationNode = new SymbolDeclarationNode();
        node.identifier = ctx._symbol.text;
        node.expression = new ExpressionNode();
        node.definition = this.visitSymbolDefinition(ctx.symbolDefinition());
        node.default    = true;
        return node;
    }

    //* Definitions 

    visitSymbolDefinition(ctx: SymbolDefinitionContext) {
        let node : SymbolDefinitionNode = new SymbolDefinitionNode;
        let rules = ctx._rules;
        for(let rule of rules) {
            node.definition.push(this.visit(rule) as RuleExpressionNode);
        }
        
        return node;
    }


    // Rule Calls
    visitCommandCall(ctx: CommandCallContext) {
        //console.log('command call');

        let node : RuleExpressionNode = new RuleExpressionNode();
        
        // Get the Command Identifier
        node.identifier = ctx._command.text;

        // Push back any addtional expressions in the sequence
        let seq = ctx.expressionSequence();
        if(seq) {
            node.parameters = this.visit(seq) as ExpressionSequenceNode;
        }

        return node;
    }

    //* Expressions
    visitExpressionSequence(ctx: ExpressionSequenceContext) {
        let node : ExpressionSequenceNode = new ExpressionSequenceNode();
        let expressions = ctx.expression();
        for(let expression of expressions) {
            node.sequence.push(this.visit(expression));
        }
        return node;
    }
    

    // Arithmatical / Operators
    visitIndexExpression (ctx: IndexExpressionContext) {
        let node : IndexExpressionNode = new IndexExpressionNode();
        node.lvalue = this.visit(ctx.expression());
        node.rvalue = this.visit(ctx.expressionSequence());
        return node;
    }

    visitMultiplicativeExpression (ctx: MultiplicativeExpressionContext) {
        let node : MultiplicativeExpressionNode = new MultiplicativeExpressionNode();
        node.lvalue = this.visit(ctx._left);
        node.rvalue = this.visit(ctx._right);
        node.operator = ctx._op.text;
        return node;
    }

    visitAdditiveExpression (ctx: AdditiveExpressionContext) {
        let node : AdditiveExpressionNode = new AdditiveExpressionNode();
        node.lvalue = this.visit(ctx._left);
        node.rvalue = this.visit(ctx._right);
        node.operator = ctx._op.text;
        return node;
    }

    visitRelationalExpression (ctx: RelationalExpressionContext)  {
        let node : RelationalExpressionNode = new RelationalExpressionNode();
        node.lvalue = this.visit(ctx._left);
        node.rvalue = this.visit(ctx._right);
        node.operator = ctx._op.text;
        return node;
    }
    
    visitEqualityExpression (ctx: EqualityExpressionContext)  {
        let node : EqualityExpressionNode = new EqualityExpressionNode();
        node.lvalue = this.visit(ctx._left);
        node.rvalue = this.visit(ctx._right);
        node.operator = ctx._op.text;
        return node;
    }
    
	visitIdentifierExpression (ctx: IdentifierExpressionContext) {
        let node : IdentifierExpressionNode = new IdentifierExpressionNode();
        node.value = ctx.Identifier().text;
        return node;
    }

    visitLiteralExpression (ctx: LiteralExpressionContext) {
        let node : LiteralExpressionNode = new LiteralExpressionNode();
        node.value = ctx.literal().text;
        return node;
    }
}