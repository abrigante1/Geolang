// Generated from ./src/antlr/GeolangParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { IndexExpressionContext } from "./GeolangParser";
import { MultiplicativeExpressionContext } from "./GeolangParser";
import { AdditiveExpressionContext } from "./GeolangParser";
import { RelationalExpressionContext } from "./GeolangParser";
import { EqualityExpressionContext } from "./GeolangParser";
import { RuleCallExpressionContext } from "./GeolangParser";
import { IdentifierExpressionContext } from "./GeolangParser";
import { LiteralExpressionContext } from "./GeolangParser";
import { CommandCallContext } from "./GeolangParser";
import { SymbolConditionalDeclarationContext } from "./GeolangParser";
import { SymbolDefaultDeclarationContext } from "./GeolangParser";
import { CompileUnitContext } from "./GeolangParser";
import { StatementContext } from "./GeolangParser";
import { DeclarationContext } from "./GeolangParser";
import { ImportStatementContext } from "./GeolangParser";
import { LogStatementContext } from "./GeolangParser";
import { ExpressionStatementContext } from "./GeolangParser";
import { SymbolDeclarationContext } from "./GeolangParser";
import { SymbolDefinitionContext } from "./GeolangParser";
import { ExpressionSequenceContext } from "./GeolangParser";
import { ExpressionContext } from "./GeolangParser";
import { RuleCallContext } from "./GeolangParser";
import { RuleSequenceContext } from "./GeolangParser";
import { LiteralContext } from "./GeolangParser";
import { EosContext } from "./GeolangParser";
import { IndentContext } from "./GeolangParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `GeolangParser`.
 */
export interface GeolangParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `IndexExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIndexExpression?: (ctx: IndexExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `IndexExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIndexExpression?: (ctx: IndexExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `RuleCallExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRuleCallExpression?: (ctx: RuleCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `RuleCallExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRuleCallExpression?: (ctx: RuleCallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `CommandCall`
	 * labeled alternative in `GeolangParser.ruleCall`.
	 * @param ctx the parse tree
	 */
	enterCommandCall?: (ctx: CommandCallContext) => void;
	/**
	 * Exit a parse tree produced by the `CommandCall`
	 * labeled alternative in `GeolangParser.ruleCall`.
	 * @param ctx the parse tree
	 */
	exitCommandCall?: (ctx: CommandCallContext) => void;

	/**
	 * Enter a parse tree produced by the `SymbolConditionalDeclaration`
	 * labeled alternative in `GeolangParser.symbolDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSymbolConditionalDeclaration?: (ctx: SymbolConditionalDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `SymbolConditionalDeclaration`
	 * labeled alternative in `GeolangParser.symbolDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSymbolConditionalDeclaration?: (ctx: SymbolConditionalDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `SymbolDefaultDeclaration`
	 * labeled alternative in `GeolangParser.symbolDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSymbolDefaultDeclaration?: (ctx: SymbolDefaultDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `SymbolDefaultDeclaration`
	 * labeled alternative in `GeolangParser.symbolDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSymbolDefaultDeclaration?: (ctx: SymbolDefaultDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `GeolangParser.compileUnit`.
	 * @param ctx the parse tree
	 */
	enterCompileUnit?: (ctx: CompileUnitContext) => void;
	/**
	 * Exit a parse tree produced by `GeolangParser.compileUnit`.
	 * @param ctx the parse tree
	 */
	exitCompileUnit?: (ctx: CompileUnitContext) => void;

	/**
	 * Enter a parse tree produced by `GeolangParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `GeolangParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `GeolangParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GeolangParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `GeolangParser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GeolangParser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `GeolangParser.logStatement`.
	 * @param ctx the parse tree
	 */
	enterLogStatement?: (ctx: LogStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GeolangParser.logStatement`.
	 * @param ctx the parse tree
	 */
	exitLogStatement?: (ctx: LogStatementContext) => void;

	/**
	 * Enter a parse tree produced by `GeolangParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `GeolangParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `GeolangParser.symbolDeclaration`.
	 * @param ctx the parse tree
	 */
	enterSymbolDeclaration?: (ctx: SymbolDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `GeolangParser.symbolDeclaration`.
	 * @param ctx the parse tree
	 */
	exitSymbolDeclaration?: (ctx: SymbolDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `GeolangParser.symbolDefinition`.
	 * @param ctx the parse tree
	 */
	enterSymbolDefinition?: (ctx: SymbolDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GeolangParser.symbolDefinition`.
	 * @param ctx the parse tree
	 */
	exitSymbolDefinition?: (ctx: SymbolDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GeolangParser.expressionSequence`.
	 * @param ctx the parse tree
	 */
	enterExpressionSequence?: (ctx: ExpressionSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `GeolangParser.expressionSequence`.
	 * @param ctx the parse tree
	 */
	exitExpressionSequence?: (ctx: ExpressionSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `GeolangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `GeolangParser.ruleCall`.
	 * @param ctx the parse tree
	 */
	enterRuleCall?: (ctx: RuleCallContext) => void;
	/**
	 * Exit a parse tree produced by `GeolangParser.ruleCall`.
	 * @param ctx the parse tree
	 */
	exitRuleCall?: (ctx: RuleCallContext) => void;

	/**
	 * Enter a parse tree produced by `GeolangParser.ruleSequence`.
	 * @param ctx the parse tree
	 */
	enterRuleSequence?: (ctx: RuleSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `GeolangParser.ruleSequence`.
	 * @param ctx the parse tree
	 */
	exitRuleSequence?: (ctx: RuleSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `GeolangParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `GeolangParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `GeolangParser.eos`.
	 * @param ctx the parse tree
	 */
	enterEos?: (ctx: EosContext) => void;
	/**
	 * Exit a parse tree produced by `GeolangParser.eos`.
	 * @param ctx the parse tree
	 */
	exitEos?: (ctx: EosContext) => void;

	/**
	 * Enter a parse tree produced by `GeolangParser.indent`.
	 * @param ctx the parse tree
	 */
	enterIndent?: (ctx: IndentContext) => void;
	/**
	 * Exit a parse tree produced by `GeolangParser.indent`.
	 * @param ctx the parse tree
	 */
	exitIndent?: (ctx: IndentContext) => void;
}

