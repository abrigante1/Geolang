// Generated from ./src/antlr/GeolangParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { GeolangParserListener } from "./GeolangParserListener";
import { GeolangParserVisitor } from "./GeolangParserVisitor";


export class GeolangParser extends Parser {
	public static readonly MultiLineComment = 1;
	public static readonly SingleLineComment = 2;
	public static readonly OpenBracket = 3;
	public static readonly CloseBracket = 4;
	public static readonly OpenParen = 5;
	public static readonly CloseParen = 6;
	public static readonly OpenBrace = 7;
	public static readonly CloseBrace = 8;
	public static readonly SemiColon = 9;
	public static readonly Comma = 10;
	public static readonly QuestionMark = 11;
	public static readonly Colon = 12;
	public static readonly Dot = 13;
	public static readonly Plus = 14;
	public static readonly Minus = 15;
	public static readonly Not = 16;
	public static readonly Multiply = 17;
	public static readonly Divide = 18;
	public static readonly Modulus = 19;
	public static readonly LessThan = 20;
	public static readonly MoreThan = 21;
	public static readonly LessThanEquals = 22;
	public static readonly GreaterThanEquals = 23;
	public static readonly Equals_ = 24;
	public static readonly NotEquals = 25;
	public static readonly And = 26;
	public static readonly Or = 27;
	public static readonly Layer = 28;
	public static readonly Scene = 29;
	public static readonly Import = 30;
	public static readonly From = 31;
	public static readonly As = 32;
	public static readonly Use = 33;
	public static readonly Where = 34;
	public static readonly Default = 35;
	public static readonly Log = 36;
	public static readonly Identifier = 37;
	public static readonly DecimalLiteral = 38;
	public static readonly StringLiteral = 39;
	public static readonly Tab = 40;
	public static readonly WhiteSpace = 41;
	public static readonly LineTerminator = 42;
	public static readonly UnexpectedCharacter = 43;
	public static readonly RULE_compileUnit = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_importStatement = 3;
	public static readonly RULE_logStatement = 4;
	public static readonly RULE_expressionStatement = 5;
	public static readonly RULE_symbolDeclaration = 6;
	public static readonly RULE_symbolDefinition = 7;
	public static readonly RULE_expressionSequence = 8;
	public static readonly RULE_expression = 9;
	public static readonly RULE_ruleCall = 10;
	public static readonly RULE_ruleSequence = 11;
	public static readonly RULE_literal = 12;
	public static readonly RULE_eos = 13;
	public static readonly RULE_indent = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compileUnit", "statement", "declaration", "importStatement", "logStatement", 
		"expressionStatement", "symbolDeclaration", "symbolDefinition", "expressionSequence", 
		"expression", "ruleCall", "ruleSequence", "literal", "eos", "indent",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"';'", "','", "'?'", "':'", "'.'", "'+'", "'-'", "'!'", "'*'", "'/'", 
		"'%'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", "'||'", "'layer'", 
		"'scene'", "'import'", "'from'", "'as'", "'use'", "'where'", "'default'", 
		"'log'", undefined, undefined, undefined, "'::'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "MultiLineComment", "SingleLineComment", "OpenBracket", "CloseBracket", 
		"OpenParen", "CloseParen", "OpenBrace", "CloseBrace", "SemiColon", "Comma", 
		"QuestionMark", "Colon", "Dot", "Plus", "Minus", "Not", "Multiply", "Divide", 
		"Modulus", "LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", 
		"Equals_", "NotEquals", "And", "Or", "Layer", "Scene", "Import", "From", 
		"As", "Use", "Where", "Default", "Log", "Identifier", "DecimalLiteral", 
		"StringLiteral", "Tab", "WhiteSpace", "LineTerminator", "UnexpectedCharacter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GeolangParser._LITERAL_NAMES, GeolangParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GeolangParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "GeolangParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return GeolangParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return GeolangParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(GeolangParser._ATN, this);
	}
	// @RuleVersion(0)
	public compileUnit(): CompileUnitContext {
		let _localctx: CompileUnitContext = new CompileUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, GeolangParser.RULE_compileUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (GeolangParser.Import - 30)) | (1 << (GeolangParser.Log - 30)) | (1 << (GeolangParser.Identifier - 30)) | (1 << (GeolangParser.DecimalLiteral - 30)) | (1 << (GeolangParser.StringLiteral - 30)) | (1 << (GeolangParser.LineTerminator - 30)))) !== 0)) {
				{
				this.state = 32;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case GeolangParser.Import:
				case GeolangParser.Log:
				case GeolangParser.Identifier:
				case GeolangParser.DecimalLiteral:
				case GeolangParser.StringLiteral:
					{
					this.state = 30;
					this.statement();
					}
					break;
				case GeolangParser.LineTerminator:
					{
					this.state = 31;
					this.match(GeolangParser.LineTerminator);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 37;
			this.match(GeolangParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, GeolangParser.RULE_statement);
		try {
			this.state = 43;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 39;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 40;
				this.importStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 41;
				this.expressionStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 42;
				this.logStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, GeolangParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.symbolDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let _localctx: ImportStatementContext = new ImportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, GeolangParser.RULE_importStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this.match(GeolangParser.Import);
			this.state = 48;
			_localctx._storage = this.match(GeolangParser.Identifier);
			this.state = 49;
			this.match(GeolangParser.From);
			this.state = 50;
			_localctx._path = this.match(GeolangParser.StringLiteral);
			this.state = 51;
			this.match(GeolangParser.As);
			this.state = 52;
			_localctx._symbol = this.match(GeolangParser.Identifier);
			this.state = 53;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logStatement(): LogStatementContext {
		let _localctx: LogStatementContext = new LogStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, GeolangParser.RULE_logStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.match(GeolangParser.Log);
			this.state = 56;
			this.expression(0);
			this.state = 57;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, GeolangParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.expressionSequence();
			this.state = 60;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public symbolDeclaration(): SymbolDeclarationContext {
		let _localctx: SymbolDeclarationContext = new SymbolDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, GeolangParser.RULE_symbolDeclaration);
		try {
			this.state = 78;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				_localctx = new SymbolConditionalDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 62;
				(_localctx as SymbolConditionalDeclarationContext)._symbol = this.match(GeolangParser.Identifier);
				this.state = 63;
				this.match(GeolangParser.Colon);
				this.state = 64;
				this.match(GeolangParser.OpenParen);
				this.state = 65;
				(_localctx as SymbolConditionalDeclarationContext)._conditional = this.expression(0);
				this.state = 66;
				this.match(GeolangParser.CloseParen);
				this.state = 67;
				this.match(GeolangParser.Colon);
				this.state = 68;
				this.eos();
				this.state = 69;
				this.symbolDefinition();
				}
				break;

			case 2:
				_localctx = new SymbolDefaultDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 71;
				(_localctx as SymbolDefaultDeclarationContext)._symbol = this.match(GeolangParser.Identifier);
				this.state = 72;
				this.match(GeolangParser.Colon);
				this.state = 73;
				this.match(GeolangParser.Default);
				this.state = 74;
				this.match(GeolangParser.Colon);
				this.state = 75;
				this.eos();
				this.state = 76;
				this.symbolDefinition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public symbolDefinition(): SymbolDefinitionContext {
		let _localctx: SymbolDefinitionContext = new SymbolDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, GeolangParser.RULE_symbolDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 80;
				this.indent();
				this.state = 81;
				_localctx._ruleCall = this.ruleCall();
				_localctx._rules.push(_localctx._ruleCall);
				this.state = 82;
				this.eos();
				}
				}
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === GeolangParser.Tab);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionSequence(): ExpressionSequenceContext {
		let _localctx: ExpressionSequenceContext = new ExpressionSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, GeolangParser.RULE_expressionSequence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.expression(0);
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GeolangParser.Comma) {
				{
				{
				this.state = 89;
				this.match(GeolangParser.Comma);
				this.state = 90;
				this.expression(0);
				}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, GeolangParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				_localctx = new RuleCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 97;
				this.ruleCall();
				}
				break;

			case 2:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 98;
				this.match(GeolangParser.Identifier);
				}
				break;

			case 3:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 99;
				this.literal();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 121;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 119;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as MultiplicativeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GeolangParser.RULE_expression);
						this.state = 102;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 103;
						(_localctx as MultiplicativeExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GeolangParser.Multiply) | (1 << GeolangParser.Divide) | (1 << GeolangParser.Modulus))) !== 0))) {
							(_localctx as MultiplicativeExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 104;
						(_localctx as MultiplicativeExpressionContext)._right = this.expression(8);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as AdditiveExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GeolangParser.RULE_expression);
						this.state = 105;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 106;
						(_localctx as AdditiveExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === GeolangParser.Plus || _la === GeolangParser.Minus)) {
							(_localctx as AdditiveExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 107;
						(_localctx as AdditiveExpressionContext)._right = this.expression(7);
						}
						break;

					case 3:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GeolangParser.RULE_expression);
						this.state = 108;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 109;
						(_localctx as RelationalExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GeolangParser.LessThan) | (1 << GeolangParser.MoreThan) | (1 << GeolangParser.LessThanEquals) | (1 << GeolangParser.GreaterThanEquals))) !== 0))) {
							(_localctx as RelationalExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 110;
						(_localctx as RelationalExpressionContext)._right = this.expression(6);
						}
						break;

					case 4:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, GeolangParser.RULE_expression);
						this.state = 111;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 112;
						(_localctx as EqualityExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === GeolangParser.Equals_ || _la === GeolangParser.NotEquals)) {
							(_localctx as EqualityExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 113;
						(_localctx as EqualityExpressionContext)._right = this.expression(5);
						}
						break;

					case 5:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, GeolangParser.RULE_expression);
						this.state = 114;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 115;
						this.match(GeolangParser.OpenBracket);
						this.state = 116;
						this.expressionSequence();
						this.state = 117;
						this.match(GeolangParser.CloseBracket);
						}
						break;
					}
					}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleCall(): RuleCallContext {
		let _localctx: RuleCallContext = new RuleCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, GeolangParser.RULE_ruleCall);
		let _la: number;
		try {
			_localctx = new CommandCallContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			(_localctx as CommandCallContext)._command = this.match(GeolangParser.Identifier);
			this.state = 125;
			this.match(GeolangParser.OpenParen);
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (GeolangParser.Identifier - 37)) | (1 << (GeolangParser.DecimalLiteral - 37)) | (1 << (GeolangParser.StringLiteral - 37)))) !== 0)) {
				{
				this.state = 126;
				(_localctx as CommandCallContext)._parameters = this.expressionSequence();
				}
			}

			this.state = 129;
			this.match(GeolangParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleSequence(): RuleSequenceContext {
		let _localctx: RuleSequenceContext = new RuleSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, GeolangParser.RULE_ruleSequence);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.ruleCall();
			this.state = 136;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 132;
					this.match(GeolangParser.Comma);
					this.state = 133;
					this.ruleSequence();
					}
					}
				}
				this.state = 138;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, GeolangParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			_la = this._input.LA(1);
			if (!(_la === GeolangParser.DecimalLiteral || _la === GeolangParser.StringLiteral)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eos(): EosContext {
		let _localctx: EosContext = new EosContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, GeolangParser.RULE_eos);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			_la = this._input.LA(1);
			if (!(_la === GeolangParser.EOF || _la === GeolangParser.LineTerminator)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indent(): IndentContext {
		let _localctx: IndentContext = new IndentContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, GeolangParser.RULE_indent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(GeolangParser.Tab);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);

		case 1:
			return this.precpred(this._ctx, 6);

		case 2:
			return this.precpred(this._ctx, 5);

		case 3:
			return this.precpred(this._ctx, 4);

		case 4:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03-\x94\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x03\x02\x07\x02#\n\x02" +
		"\f\x02\x0E\x02&\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03.\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\bQ\n\b\x03\t\x03\t\x03\t\x03\t\x06" +
		"\tW\n\t\r\t\x0E\tX\x03\n\x03\n\x03\n\x07\n^\n\n\f\n\x0E\na\v\n\x03\v\x03" +
		"\v\x03\v\x03\v\x05\vg\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\vz\n\v\f" +
		"\v\x0E\v}\v\v\x03\f\x03\f\x03\f\x05\f\x82\n\f\x03\f\x03\f\x03\r\x03\r" +
		"\x03\r\x07\r\x89\n\r\f\r\x0E\r\x8C\v\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x02\x02\x03\x14\x11\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02\x02\b\x03\x02\x13\x15\x03\x02\x10\x11\x03\x02\x16\x19" +
		"\x03\x02\x1A\x1B\x03\x02()\x03\x03,,\x02\x95\x02$\x03\x02\x02\x02\x04" +
		"-\x03\x02\x02\x02\x06/\x03\x02\x02\x02\b1\x03\x02\x02\x02\n9\x03\x02\x02" +
		"\x02\f=\x03\x02\x02\x02\x0EP\x03\x02\x02\x02\x10V\x03\x02\x02\x02\x12" +
		"Z\x03\x02\x02\x02\x14f\x03\x02\x02\x02\x16~\x03\x02\x02\x02\x18\x85\x03" +
		"\x02\x02\x02\x1A\x8D\x03\x02\x02\x02\x1C\x8F\x03\x02\x02\x02\x1E\x91\x03" +
		"\x02\x02\x02 #\x05\x04\x03\x02!#\x07,\x02\x02\" \x03\x02\x02\x02\"!\x03" +
		"\x02\x02\x02#&\x03\x02\x02\x02$\"\x03\x02\x02\x02$%\x03\x02\x02\x02%\'" +
		"\x03\x02\x02\x02&$\x03\x02\x02\x02\'(\x07\x02\x02\x03(\x03\x03\x02\x02" +
		"\x02).\x05\x06\x04\x02*.\x05\b\x05\x02+.\x05\f\x07\x02,.\x05\n\x06\x02" +
		"-)\x03\x02\x02\x02-*\x03\x02\x02\x02-+\x03\x02\x02\x02-,\x03\x02\x02\x02" +
		".\x05\x03\x02\x02\x02/0\x05\x0E\b\x020\x07\x03\x02\x02\x0212\x07 \x02" +
		"\x0223\x07\'\x02\x0234\x07!\x02\x0245\x07)\x02\x0256\x07\"\x02\x0267\x07" +
		"\'\x02\x0278\x05\x1C\x0F\x028\t\x03\x02\x02\x029:\x07&\x02\x02:;\x05\x14" +
		"\v\x02;<\x05\x1C\x0F\x02<\v\x03\x02\x02\x02=>\x05\x12\n\x02>?\x05\x1C" +
		"\x0F\x02?\r\x03\x02\x02\x02@A\x07\'\x02\x02AB\x07\x0E\x02\x02BC\x07\x07" +
		"\x02\x02CD\x05\x14\v\x02DE\x07\b\x02\x02EF\x07\x0E\x02\x02FG\x05\x1C\x0F" +
		"\x02GH\x05\x10\t\x02HQ\x03\x02\x02\x02IJ\x07\'\x02\x02JK\x07\x0E\x02\x02" +
		"KL\x07%\x02\x02LM\x07\x0E\x02\x02MN\x05\x1C\x0F\x02NO\x05\x10\t\x02OQ" +
		"\x03\x02\x02\x02P@\x03\x02\x02\x02PI\x03\x02\x02\x02Q\x0F\x03\x02\x02" +
		"\x02RS\x05\x1E\x10\x02ST\x05\x16\f\x02TU\x05\x1C\x0F\x02UW\x03\x02\x02" +
		"\x02VR\x03\x02\x02\x02WX\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02" +
		"\x02Y\x11\x03\x02\x02\x02Z_\x05\x14\v\x02[\\\x07\f\x02\x02\\^\x05\x14" +
		"\v\x02][\x03\x02\x02\x02^a\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02" +
		"\x02\x02`\x13\x03\x02\x02\x02a_\x03\x02\x02\x02bc\b\v\x01\x02cg\x05\x16" +
		"\f\x02dg\x07\'\x02\x02eg\x05\x1A\x0E\x02fb\x03\x02\x02\x02fd\x03\x02\x02" +
		"\x02fe\x03\x02\x02\x02g{\x03\x02\x02\x02hi\f\t\x02\x02ij\t\x02\x02\x02" +
		"jz\x05\x14\v\nkl\f\b\x02\x02lm\t\x03\x02\x02mz\x05\x14\v\tno\f\x07\x02" +
		"\x02op\t\x04\x02\x02pz\x05\x14\v\bqr\f\x06\x02\x02rs\t\x05\x02\x02sz\x05" +
		"\x14\v\x07tu\f\n\x02\x02uv\x07\x05\x02\x02vw\x05\x12\n\x02wx\x07\x06\x02" +
		"\x02xz\x03\x02\x02\x02yh\x03\x02\x02\x02yk\x03\x02\x02\x02yn\x03\x02\x02" +
		"\x02yq\x03\x02\x02\x02yt\x03\x02\x02\x02z}\x03\x02\x02\x02{y\x03\x02\x02" +
		"\x02{|\x03\x02\x02\x02|\x15\x03\x02\x02\x02}{\x03\x02\x02\x02~\x7F\x07" +
		"\'\x02\x02\x7F\x81\x07\x07\x02\x02\x80\x82\x05\x12\n\x02\x81\x80\x03\x02" +
		"\x02\x02\x81\x82\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x84\x07\b" +
		"\x02\x02\x84\x17\x03\x02\x02\x02\x85\x8A\x05\x16\f\x02\x86\x87\x07\f\x02" +
		"\x02\x87\x89\x05\x18\r\x02\x88\x86\x03\x02\x02\x02\x89\x8C\x03\x02\x02" +
		"\x02\x8A\x88\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x19\x03\x02\x02" +
		"\x02\x8C\x8A\x03\x02\x02\x02\x8D\x8E\t\x06\x02\x02\x8E\x1B\x03\x02\x02" +
		"\x02\x8F\x90\t\x07\x02\x02\x90\x1D\x03\x02\x02\x02\x91\x92\x07*\x02\x02" +
		"\x92\x1F\x03\x02\x02\x02\r\"$-PX_fy{\x81\x8A";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GeolangParser.__ATN) {
			GeolangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GeolangParser._serializedATN));
		}

		return GeolangParser.__ATN;
	}

}

export class CompileUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(GeolangParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public LineTerminator(): TerminalNode[];
	public LineTerminator(i: number): TerminalNode;
	public LineTerminator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GeolangParser.LineTerminator);
		} else {
			return this.getToken(GeolangParser.LineTerminator, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeolangParser.RULE_compileUnit; }
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterCompileUnit) {
			listener.enterCompileUnit(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitCompileUnit) {
			listener.exitCompileUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitCompileUnit) {
			return visitor.visitCompileUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public importStatement(): ImportStatementContext | undefined {
		return this.tryGetRuleContext(0, ImportStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public logStatement(): LogStatementContext | undefined {
		return this.tryGetRuleContext(0, LogStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeolangParser.RULE_statement; }
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public symbolDeclaration(): SymbolDeclarationContext {
		return this.getRuleContext(0, SymbolDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeolangParser.RULE_declaration; }
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	public _storage: Token;
	public _path: Token;
	public _symbol: Token;
	public Import(): TerminalNode { return this.getToken(GeolangParser.Import, 0); }
	public From(): TerminalNode { return this.getToken(GeolangParser.From, 0); }
	public As(): TerminalNode { return this.getToken(GeolangParser.As, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GeolangParser.Identifier);
		} else {
			return this.getToken(GeolangParser.Identifier, i);
		}
	}
	public StringLiteral(): TerminalNode { return this.getToken(GeolangParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeolangParser.RULE_importStatement; }
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterImportStatement) {
			listener.enterImportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitImportStatement) {
			listener.exitImportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitImportStatement) {
			return visitor.visitImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogStatementContext extends ParserRuleContext {
	public Log(): TerminalNode { return this.getToken(GeolangParser.Log, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeolangParser.RULE_logStatement; }
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterLogStatement) {
			listener.enterLogStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitLogStatement) {
			listener.exitLogStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitLogStatement) {
			return visitor.visitLogStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeolangParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolDeclarationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeolangParser.RULE_symbolDeclaration; }
	public copyFrom(ctx: SymbolDeclarationContext): void {
		super.copyFrom(ctx);
	}
}
export class SymbolConditionalDeclarationContext extends SymbolDeclarationContext {
	public _symbol: Token;
	public _conditional: ExpressionContext;
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GeolangParser.Colon);
		} else {
			return this.getToken(GeolangParser.Colon, i);
		}
	}
	public OpenParen(): TerminalNode { return this.getToken(GeolangParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(GeolangParser.CloseParen, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public symbolDefinition(): SymbolDefinitionContext {
		return this.getRuleContext(0, SymbolDefinitionContext);
	}
	public Identifier(): TerminalNode { return this.getToken(GeolangParser.Identifier, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: SymbolDeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterSymbolConditionalDeclaration) {
			listener.enterSymbolConditionalDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitSymbolConditionalDeclaration) {
			listener.exitSymbolConditionalDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitSymbolConditionalDeclaration) {
			return visitor.visitSymbolConditionalDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SymbolDefaultDeclarationContext extends SymbolDeclarationContext {
	public _symbol: Token;
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GeolangParser.Colon);
		} else {
			return this.getToken(GeolangParser.Colon, i);
		}
	}
	public Default(): TerminalNode { return this.getToken(GeolangParser.Default, 0); }
	public eos(): EosContext {
		return this.getRuleContext(0, EosContext);
	}
	public symbolDefinition(): SymbolDefinitionContext {
		return this.getRuleContext(0, SymbolDefinitionContext);
	}
	public Identifier(): TerminalNode { return this.getToken(GeolangParser.Identifier, 0); }
	constructor(ctx: SymbolDeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterSymbolDefaultDeclaration) {
			listener.enterSymbolDefaultDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitSymbolDefaultDeclaration) {
			listener.exitSymbolDefaultDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitSymbolDefaultDeclaration) {
			return visitor.visitSymbolDefaultDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolDefinitionContext extends ParserRuleContext {
	public _ruleCall: RuleCallContext;
	public _rules: RuleCallContext[] = [];
	public indent(): IndentContext[];
	public indent(i: number): IndentContext;
	public indent(i?: number): IndentContext | IndentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IndentContext);
		} else {
			return this.getRuleContext(i, IndentContext);
		}
	}
	public eos(): EosContext[];
	public eos(i: number): EosContext;
	public eos(i?: number): EosContext | EosContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EosContext);
		} else {
			return this.getRuleContext(i, EosContext);
		}
	}
	public ruleCall(): RuleCallContext[];
	public ruleCall(i: number): RuleCallContext;
	public ruleCall(i?: number): RuleCallContext | RuleCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleCallContext);
		} else {
			return this.getRuleContext(i, RuleCallContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeolangParser.RULE_symbolDefinition; }
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterSymbolDefinition) {
			listener.enterSymbolDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitSymbolDefinition) {
			listener.exitSymbolDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitSymbolDefinition) {
			return visitor.visitSymbolDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionSequenceContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GeolangParser.Comma);
		} else {
			return this.getToken(GeolangParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeolangParser.RULE_expressionSequence; }
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterExpressionSequence) {
			listener.enterExpressionSequence(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitExpressionSequence) {
			listener.exitExpressionSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitExpressionSequence) {
			return visitor.visitExpressionSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeolangParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IndexExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OpenBracket(): TerminalNode { return this.getToken(GeolangParser.OpenBracket, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseBracket(): TerminalNode { return this.getToken(GeolangParser.CloseBracket, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterIndexExpression) {
			listener.enterIndexExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitIndexExpression) {
			listener.exitIndexExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitIndexExpression) {
			return visitor.visitIndexExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _op: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(GeolangParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(GeolangParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(GeolangParser.Modulus, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _op: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(GeolangParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(GeolangParser.Minus, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _op: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(GeolangParser.LessThan, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(GeolangParser.MoreThan, 0); }
	public GreaterThanEquals(): TerminalNode | undefined { return this.tryGetToken(GeolangParser.GreaterThanEquals, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(GeolangParser.LessThanEquals, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public _left: ExpressionContext;
	public _op: Token;
	public _right: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Equals_(): TerminalNode | undefined { return this.tryGetToken(GeolangParser.Equals_, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(GeolangParser.NotEquals, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RuleCallExpressionContext extends ExpressionContext {
	public ruleCall(): RuleCallContext {
		return this.getRuleContext(0, RuleCallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterRuleCallExpression) {
			listener.enterRuleCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitRuleCallExpression) {
			listener.exitRuleCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitRuleCallExpression) {
			return visitor.visitRuleCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends ExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(GeolangParser.Identifier, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExpressionContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleCallContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeolangParser.RULE_ruleCall; }
	public copyFrom(ctx: RuleCallContext): void {
		super.copyFrom(ctx);
	}
}
export class CommandCallContext extends RuleCallContext {
	public _command: Token;
	public _parameters: ExpressionSequenceContext;
	public OpenParen(): TerminalNode { return this.getToken(GeolangParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(GeolangParser.CloseParen, 0); }
	public Identifier(): TerminalNode { return this.getToken(GeolangParser.Identifier, 0); }
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	constructor(ctx: RuleCallContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterCommandCall) {
			listener.enterCommandCall(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitCommandCall) {
			listener.exitCommandCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitCommandCall) {
			return visitor.visitCommandCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleSequenceContext extends ParserRuleContext {
	public ruleCall(): RuleCallContext {
		return this.getRuleContext(0, RuleCallContext);
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GeolangParser.Comma);
		} else {
			return this.getToken(GeolangParser.Comma, i);
		}
	}
	public ruleSequence(): RuleSequenceContext[];
	public ruleSequence(i: number): RuleSequenceContext;
	public ruleSequence(i?: number): RuleSequenceContext | RuleSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleSequenceContext);
		} else {
			return this.getRuleContext(i, RuleSequenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeolangParser.RULE_ruleSequence; }
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterRuleSequence) {
			listener.enterRuleSequence(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitRuleSequence) {
			listener.exitRuleSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitRuleSequence) {
			return visitor.visitRuleSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(GeolangParser.DecimalLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(GeolangParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeolangParser.RULE_literal; }
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	public LineTerminator(): TerminalNode | undefined { return this.tryGetToken(GeolangParser.LineTerminator, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(GeolangParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeolangParser.RULE_eos; }
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterEos) {
			listener.enterEos(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitEos) {
			listener.exitEos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitEos) {
			return visitor.visitEos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndentContext extends ParserRuleContext {
	public Tab(): TerminalNode { return this.getToken(GeolangParser.Tab, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GeolangParser.RULE_indent; }
	// @Override
	public enterRule(listener: GeolangParserListener): void {
		if (listener.enterIndent) {
			listener.enterIndent(this);
		}
	}
	// @Override
	public exitRule(listener: GeolangParserListener): void {
		if (listener.exitIndent) {
			listener.exitIndent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GeolangParserVisitor<Result>): Result {
		if (visitor.visitIndent) {
			return visitor.visitIndent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


