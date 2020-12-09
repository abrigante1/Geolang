"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Root AST Node Containing All Sub Statements
 */
class SketchNode {
    constructor() {
        this.statements = [];
    }
}
exports.SketchNode = SketchNode;
//* Expression Nodes
/**
 * Defines an Expression Node Type
 */
class ExpressionNode {
}
exports.ExpressionNode = ExpressionNode;
// Literals
/**
 * Defines a Unary Value Expression Node that Stores a Value
 */
class ValueExpressionNode extends ExpressionNode {
}
exports.ValueExpressionNode = ValueExpressionNode;
class IdentifierExpressionNode extends ValueExpressionNode {
}
exports.IdentifierExpressionNode = IdentifierExpressionNode;
class LiteralExpressionNode extends ValueExpressionNode {
}
exports.LiteralExpressionNode = LiteralExpressionNode;
// Arithmatical
/**
 * Defines a Binary Expression that contains left & right expression
 * operands
 * Syntax: <ValueA> <Operation> <ValueB>
 */
class BinaryExpressionNode extends ExpressionNode {
}
exports.BinaryExpressionNode = BinaryExpressionNode;
class IndexExpressionNode extends BinaryExpressionNode {
}
exports.IndexExpressionNode = IndexExpressionNode;
class MultiplicativeExpressionNode extends BinaryExpressionNode {
}
exports.MultiplicativeExpressionNode = MultiplicativeExpressionNode;
class AdditiveExpressionNode extends BinaryExpressionNode {
}
exports.AdditiveExpressionNode = AdditiveExpressionNode;
class RelationalExpressionNode extends BinaryExpressionNode {
}
exports.RelationalExpressionNode = RelationalExpressionNode;
class EqualityExpressionNode extends BinaryExpressionNode {
}
exports.EqualityExpressionNode = EqualityExpressionNode;
// Rules
class RuleExpressionNode extends ExpressionNode {
}
exports.RuleExpressionNode = RuleExpressionNode;
//* Statement Nodes
/**
 * Defines the AST Node for an Import Statement
 * Syntax: import <storage> from <path> as <symbol>
 */
class ImportNode {
}
exports.ImportNode = ImportNode;
/**
 * Defines the AST for a Basic Output Log Statement
 * Syntax: log <expression>
 */
class LogNode {
}
exports.LogNode = LogNode;
/**
 * TODO: WHY IS THIS A STATEMENT NODE...?
 * Defines the AST Node for a Value Expression
 * Syntax: <symbol>[<accessor>]*
 */
class ValueNode {
    constructor() {
        this.accessors = new Array();
    }
}
exports.ValueNode = ValueNode;
//* Declaration Nodes
class DeclarationNode {
}
exports.DeclarationNode = DeclarationNode;
class SymbolDeclarationNode extends DeclarationNode {
    constructor() {
        super(...arguments);
        this.default = false;
    }
}
exports.SymbolDeclarationNode = SymbolDeclarationNode;
//* Definition Nodes
class DefinitionNode {
}
exports.DefinitionNode = DefinitionNode;
class SymbolDefinitionNode extends DefinitionNode {
    constructor() {
        super(...arguments);
        this.definition = new Array();
    }
}
exports.SymbolDefinitionNode = SymbolDefinitionNode;
class ExpressionSequenceNode extends DefinitionNode {
    constructor() {
        super(...arguments);
        this.sequence = new Array();
    }
}
exports.ExpressionSequenceNode = ExpressionSequenceNode;
//# sourceMappingURL=GeolangAST.js.map