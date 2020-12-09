// Generated from ./src/antlr/GeolangParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GeolangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface GeolangParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `IndexExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexExpression?: (ctx: IndexExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `MultiplicativeExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `AdditiveExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `RelationalExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `EqualityExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `RuleCallExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleCallExpression?: (ctx: RuleCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpression?: (ctx: IdentifierExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `GeolangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `CommandCall`
	 * labeled alternative in `GeolangParser.ruleCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandCall?: (ctx: CommandCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `SymbolConditionalDeclaration`
	 * labeled alternative in `GeolangParser.symbolDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolConditionalDeclaration?: (ctx: SymbolConditionalDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `SymbolDefaultDeclaration`
	 * labeled alternative in `GeolangParser.symbolDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolDefaultDeclaration?: (ctx: SymbolDefaultDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GeolangParser.compileUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompileUnit?: (ctx: CompileUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `GeolangParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `GeolangParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GeolangParser.importStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStatement?: (ctx: ImportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `GeolangParser.logStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogStatement?: (ctx: LogStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `GeolangParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `GeolangParser.symbolDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolDeclaration?: (ctx: SymbolDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `GeolangParser.symbolDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolDefinition?: (ctx: SymbolDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GeolangParser.expressionSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionSequence?: (ctx: ExpressionSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `GeolangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `GeolangParser.ruleCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleCall?: (ctx: RuleCallContext) => Result;

	/**
	 * Visit a parse tree produced by `GeolangParser.ruleSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleSequence?: (ctx: RuleSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `GeolangParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `GeolangParser.eos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEos?: (ctx: EosContext) => Result;

	/**
	 * Visit a parse tree produced by `GeolangParser.indent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndent?: (ctx: IndentContext) => Result;
}

