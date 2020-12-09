import { ExpressionStatementContext } from "./GeolangParser";

/**
 * The Root AST Node Containing All Sub Statements
 */
export class SketchNode {
    statements : StatementNode[] = [];
}

/**
 * Abstract Statement Node Interface
 */
export interface StatementNode {
}

//* Expression Nodes

/**
 * Defines an Expression Node Type
 */
export class ExpressionNode implements StatementNode {}

// Literals
/**
 * Defines a Unary Value Expression Node that Stores a Value
 */
export class ValueExpressionNode extends ExpressionNode {
    value : string;
}

export class IdentifierExpressionNode extends ValueExpressionNode {}
export class LiteralExpressionNode extends ValueExpressionNode {}

// Arithmatical
/**
 * Defines a Binary Expression that contains left & right expression
 * operands
 * Syntax: <ValueA> <Operation> <ValueB>
 */
export class BinaryExpressionNode extends ExpressionNode {
    lvalue : ExpressionNode;
    rvalue : ExpressionNode;
    operator? : string;
}

export class IndexExpressionNode extends BinaryExpressionNode {}
export class MultiplicativeExpressionNode extends BinaryExpressionNode {}
export class AdditiveExpressionNode extends BinaryExpressionNode {}
export class RelationalExpressionNode extends BinaryExpressionNode {}
export class EqualityExpressionNode extends BinaryExpressionNode {}

// Rules
export class RuleExpressionNode extends ExpressionNode {
    identifier  : string;
    parameters  : ExpressionSequenceNode;
}

//* Statement Nodes

/**
 * Defines the AST Node for an Import Statement
 * Syntax: import <storage> from <path> as <symbol>
 */
export class ImportNode implements StatementNode {
    storage : string;
    path     : string;
    symbol   : string;
}

/**
 * Defines the AST for a Basic Output Log Statement
 * Syntax: log <expression>
 */
export class LogNode implements StatementNode {
    expression : ExpressionNode;
}

/**
 * TODO: WHY IS THIS A STATEMENT NODE...?
 * Defines the AST Node for a Value Expression
 * Syntax: <symbol>[<accessor>]*
 */
export class ValueNode implements StatementNode {
    symbol    : string;
    accessors : Array<string> = new Array<string>();
}


//* Declaration Nodes

export class DeclarationNode implements StatementNode {}

export class SymbolDeclarationNode extends DeclarationNode {
    identifier : string;
    expression : ExpressionNode;
    definition : SymbolDefinitionNode;
    default    : boolean = false;
}

//* Definition Nodes
export class DefinitionNode implements StatementNode {}

export class SymbolDefinitionNode extends DefinitionNode {
    definition : Array<RuleExpressionNode> = new Array<RuleExpressionNode>();
}

export class ExpressionSequenceNode extends DefinitionNode {
    sequence : Array<ExpressionNode> = new Array<RuleExpressionNode>();
}