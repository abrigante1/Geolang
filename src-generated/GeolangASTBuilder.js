"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const GeolangAST_1 = require("./GeolangAST");
/**
 * Visits the ParseTree and Generates a GeolangAST
 */
class GeolangASTBuilder extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor() {
        super();
        this.root = new GeolangAST_1.SketchNode();
    }
    defaultResult() {
        return new GeolangAST_1.ExpressionNode();
    }
    visitCompileUnit(ctx) {
        //console.log("--Visit Compile Unit--")
        let statements = ctx.statement();
        for (let statement of statements) {
            this.root.statements.push(this.visit(statement));
        }
    }
    //* Statements
    visitImportStatement(ctx) {
        //console.log("--Visit Import Statement--");
        // Create the Import Node
        let node = new GeolangAST_1.ImportNode();
        // Store the Storage, Path and Symbol
        node.storage = ctx._storage.text;
        node.path = ctx._path.text.replace(/['"]+/g, '');
        node.symbol = ctx._symbol.text;
        // Add the Node to the Root 
        return node;
    }
    visitLogStatement(ctx) {
        let node = new GeolangAST_1.LogNode();
        node.expression = this.visit(ctx.expression());
        return node;
    }
    visitExpressionStatement(ctx) {
        return this.visit(ctx.expressionSequence());
    }
    //* Declarations
    visitSymbolConditionalDeclaration(ctx) {
        let node = new GeolangAST_1.SymbolDeclarationNode();
        node.identifier = ctx._symbol.text;
        node.expression = this.visit(ctx._conditional);
        node.definition = this.visit(ctx.symbolDefinition());
        node.default = false;
        return node;
    }
    visitSymbolDefaultDeclaration(ctx) {
        let node = new GeolangAST_1.SymbolDeclarationNode();
        node.identifier = ctx._symbol.text;
        node.expression = new GeolangAST_1.ExpressionNode();
        node.definition = this.visitSymbolDefinition(ctx.symbolDefinition());
        node.default = true;
        return node;
    }
    //* Definitions 
    visitSymbolDefinition(ctx) {
        let node = new GeolangAST_1.SymbolDefinitionNode;
        let rules = ctx._rules;
        for (let rule of rules) {
            node.definition.push(this.visit(rule));
        }
        return node;
    }
    // Rule Calls
    visitCommandCall(ctx) {
        //console.log('command call');
        let node = new GeolangAST_1.RuleExpressionNode();
        // Get the Command Identifier
        node.identifier = ctx._command.text;
        // Push back any addtional expressions in the sequence
        let seq = ctx.expressionSequence();
        if (seq) {
            node.parameters = this.visit(seq);
        }
        return node;
    }
    //* Expressions
    visitExpressionSequence(ctx) {
        let node = new GeolangAST_1.ExpressionSequenceNode();
        let expressions = ctx.expression();
        for (let expression of expressions) {
            node.sequence.push(this.visit(expression));
        }
        return node;
    }
    // Arithmatical / Operators
    visitIndexExpression(ctx) {
        let node = new GeolangAST_1.IndexExpressionNode();
        node.lvalue = this.visit(ctx.expression());
        node.rvalue = this.visit(ctx.expressionSequence());
        return node;
    }
    visitMultiplicativeExpression(ctx) {
        let node = new GeolangAST_1.MultiplicativeExpressionNode();
        node.lvalue = this.visit(ctx._left);
        node.rvalue = this.visit(ctx._right);
        node.operator = ctx._op.text;
        return node;
    }
    visitAdditiveExpression(ctx) {
        let node = new GeolangAST_1.AdditiveExpressionNode();
        node.lvalue = this.visit(ctx._left);
        node.rvalue = this.visit(ctx._right);
        node.operator = ctx._op.text;
        return node;
    }
    visitRelationalExpression(ctx) {
        let node = new GeolangAST_1.RelationalExpressionNode();
        node.lvalue = this.visit(ctx._left);
        node.rvalue = this.visit(ctx._right);
        node.operator = ctx._op.text;
        return node;
    }
    visitEqualityExpression(ctx) {
        let node = new GeolangAST_1.EqualityExpressionNode();
        node.lvalue = this.visit(ctx._left);
        node.rvalue = this.visit(ctx._right);
        node.operator = ctx._op.text;
        return node;
    }
    visitIdentifierExpression(ctx) {
        let node = new GeolangAST_1.IdentifierExpressionNode();
        node.value = ctx.Identifier().text;
        return node;
    }
    visitLiteralExpression(ctx) {
        let node = new GeolangAST_1.LiteralExpressionNode();
        node.value = ctx.literal().text;
        return node;
    }
}
exports.GeolangASTBuilder = GeolangASTBuilder;
//# sourceMappingURL=GeolangASTBuilder.js.map