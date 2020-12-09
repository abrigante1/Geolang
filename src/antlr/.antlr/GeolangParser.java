// Generated from c:\Users\Anthony\GoogleDrive\DigiPen\Years\Year5\Semester9\CS375\Development\GeolangNodeServer\src\antlr\GeolangParser.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class GeolangParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		MultiLineComment=1, SingleLineComment=2, OpenBracket=3, CloseBracket=4, 
		OpenParen=5, CloseParen=6, OpenBrace=7, CloseBrace=8, SemiColon=9, Comma=10, 
		QuestionMark=11, Colon=12, Dot=13, Plus=14, Minus=15, Not=16, Multiply=17, 
		Divide=18, Modulus=19, LessThan=20, MoreThan=21, LessThanEquals=22, GreaterThanEquals=23, 
		Equals_=24, NotEquals=25, And=26, Or=27, Layer=28, Scene=29, Import=30, 
		From=31, As=32, Use=33, Where=34, Default=35, Log=36, Identifier=37, DecimalLiteral=38, 
		StringLiteral=39, Tab=40, WhiteSpace=41, LineTerminator=42, UnexpectedCharacter=43;
	public static final int
		RULE_compileUnit = 0, RULE_statement = 1, RULE_declaration = 2, RULE_importStatement = 3, 
		RULE_logStatement = 4, RULE_expressionStatement = 5, RULE_symbolDeclaration = 6, 
		RULE_symbolDefinition = 7, RULE_expressionSequence = 8, RULE_expression = 9, 
		RULE_ruleCall = 10, RULE_ruleSequence = 11, RULE_literal = 12, RULE_eos = 13, 
		RULE_indent = 14;
	private static String[] makeRuleNames() {
		return new String[] {
			"compileUnit", "statement", "declaration", "importStatement", "logStatement", 
			"expressionStatement", "symbolDeclaration", "symbolDefinition", "expressionSequence", 
			"expression", "ruleCall", "ruleSequence", "literal", "eos", "indent"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'['", "']'", "'('", "')'", "'{'", "'}'", "';'", "','", 
			"'?'", "':'", "'.'", "'+'", "'-'", "'!'", "'*'", "'/'", "'%'", "'<'", 
			"'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", "'||'", "'layer'", "'scene'", 
			"'import'", "'from'", "'as'", "'use'", "'where'", "'default'", "'log'", 
			null, null, null, "'::'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "MultiLineComment", "SingleLineComment", "OpenBracket", "CloseBracket", 
			"OpenParen", "CloseParen", "OpenBrace", "CloseBrace", "SemiColon", "Comma", 
			"QuestionMark", "Colon", "Dot", "Plus", "Minus", "Not", "Multiply", "Divide", 
			"Modulus", "LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", 
			"Equals_", "NotEquals", "And", "Or", "Layer", "Scene", "Import", "From", 
			"As", "Use", "Where", "Default", "Log", "Identifier", "DecimalLiteral", 
			"StringLiteral", "Tab", "WhiteSpace", "LineTerminator", "UnexpectedCharacter"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "GeolangParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public GeolangParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class CompileUnitContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(GeolangParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> LineTerminator() { return getTokens(GeolangParser.LineTerminator); }
		public TerminalNode LineTerminator(int i) {
			return getToken(GeolangParser.LineTerminator, i);
		}
		public CompileUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compileUnit; }
	}

	public final CompileUnitContext compileUnit() throws RecognitionException {
		CompileUnitContext _localctx = new CompileUnitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_compileUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Import) | (1L << Log) | (1L << Identifier) | (1L << DecimalLiteral) | (1L << StringLiteral) | (1L << LineTerminator))) != 0)) {
				{
				setState(32);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case Import:
				case Log:
				case Identifier:
				case DecimalLiteral:
				case StringLiteral:
					{
					setState(30);
					statement();
					}
					break;
				case LineTerminator:
					{
					setState(31);
					match(LineTerminator);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(36);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(37);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public ImportStatementContext importStatement() {
			return getRuleContext(ImportStatementContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public LogStatementContext logStatement() {
			return getRuleContext(LogStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(43);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(39);
				declaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(40);
				importStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(41);
				expressionStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(42);
				logStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclarationContext extends ParserRuleContext {
		public SymbolDeclarationContext symbolDeclaration() {
			return getRuleContext(SymbolDeclarationContext.class,0);
		}
		public DeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration; }
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_declaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			symbolDeclaration();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ImportStatementContext extends ParserRuleContext {
		public Token storage;
		public Token path;
		public Token symbol;
		public TerminalNode Import() { return getToken(GeolangParser.Import, 0); }
		public TerminalNode From() { return getToken(GeolangParser.From, 0); }
		public TerminalNode As() { return getToken(GeolangParser.As, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public List<TerminalNode> Identifier() { return getTokens(GeolangParser.Identifier); }
		public TerminalNode Identifier(int i) {
			return getToken(GeolangParser.Identifier, i);
		}
		public TerminalNode StringLiteral() { return getToken(GeolangParser.StringLiteral, 0); }
		public ImportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importStatement; }
	}

	public final ImportStatementContext importStatement() throws RecognitionException {
		ImportStatementContext _localctx = new ImportStatementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_importStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(47);
			match(Import);
			setState(48);
			((ImportStatementContext)_localctx).storage = match(Identifier);
			setState(49);
			match(From);
			setState(50);
			((ImportStatementContext)_localctx).path = match(StringLiteral);
			setState(51);
			match(As);
			setState(52);
			((ImportStatementContext)_localctx).symbol = match(Identifier);
			setState(53);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LogStatementContext extends ParserRuleContext {
		public TerminalNode Log() { return getToken(GeolangParser.Log, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public LogStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logStatement; }
	}

	public final LogStatementContext logStatement() throws RecognitionException {
		LogStatementContext _localctx = new LogStatementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_logStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			match(Log);
			setState(56);
			expression(0);
			setState(57);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionStatementContext extends ParserRuleContext {
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(59);
			expressionSequence();
			setState(60);
			eos();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SymbolDeclarationContext extends ParserRuleContext {
		public SymbolDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_symbolDeclaration; }
	 
		public SymbolDeclarationContext() { }
		public void copyFrom(SymbolDeclarationContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class SymbolConditionalDeclarationContext extends SymbolDeclarationContext {
		public Token symbol;
		public ExpressionContext conditional;
		public List<TerminalNode> Colon() { return getTokens(GeolangParser.Colon); }
		public TerminalNode Colon(int i) {
			return getToken(GeolangParser.Colon, i);
		}
		public TerminalNode OpenParen() { return getToken(GeolangParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(GeolangParser.CloseParen, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public SymbolDefinitionContext symbolDefinition() {
			return getRuleContext(SymbolDefinitionContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(GeolangParser.Identifier, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public SymbolConditionalDeclarationContext(SymbolDeclarationContext ctx) { copyFrom(ctx); }
	}
	public static class SymbolDefaultDeclarationContext extends SymbolDeclarationContext {
		public Token symbol;
		public List<TerminalNode> Colon() { return getTokens(GeolangParser.Colon); }
		public TerminalNode Colon(int i) {
			return getToken(GeolangParser.Colon, i);
		}
		public TerminalNode Default() { return getToken(GeolangParser.Default, 0); }
		public EosContext eos() {
			return getRuleContext(EosContext.class,0);
		}
		public SymbolDefinitionContext symbolDefinition() {
			return getRuleContext(SymbolDefinitionContext.class,0);
		}
		public TerminalNode Identifier() { return getToken(GeolangParser.Identifier, 0); }
		public SymbolDefaultDeclarationContext(SymbolDeclarationContext ctx) { copyFrom(ctx); }
	}

	public final SymbolDeclarationContext symbolDeclaration() throws RecognitionException {
		SymbolDeclarationContext _localctx = new SymbolDeclarationContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_symbolDeclaration);
		try {
			setState(78);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				_localctx = new SymbolConditionalDeclarationContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(62);
				((SymbolConditionalDeclarationContext)_localctx).symbol = match(Identifier);
				setState(63);
				match(Colon);
				setState(64);
				match(OpenParen);
				setState(65);
				((SymbolConditionalDeclarationContext)_localctx).conditional = expression(0);
				setState(66);
				match(CloseParen);
				setState(67);
				match(Colon);
				setState(68);
				eos();
				setState(69);
				symbolDefinition();
				}
				break;
			case 2:
				_localctx = new SymbolDefaultDeclarationContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(71);
				((SymbolDefaultDeclarationContext)_localctx).symbol = match(Identifier);
				setState(72);
				match(Colon);
				setState(73);
				match(Default);
				setState(74);
				match(Colon);
				setState(75);
				eos();
				setState(76);
				symbolDefinition();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SymbolDefinitionContext extends ParserRuleContext {
		public RuleCallContext ruleCall;
		public List<RuleCallContext> rules = new ArrayList<RuleCallContext>();
		public List<IndentContext> indent() {
			return getRuleContexts(IndentContext.class);
		}
		public IndentContext indent(int i) {
			return getRuleContext(IndentContext.class,i);
		}
		public List<EosContext> eos() {
			return getRuleContexts(EosContext.class);
		}
		public EosContext eos(int i) {
			return getRuleContext(EosContext.class,i);
		}
		public List<RuleCallContext> ruleCall() {
			return getRuleContexts(RuleCallContext.class);
		}
		public RuleCallContext ruleCall(int i) {
			return getRuleContext(RuleCallContext.class,i);
		}
		public SymbolDefinitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_symbolDefinition; }
	}

	public final SymbolDefinitionContext symbolDefinition() throws RecognitionException {
		SymbolDefinitionContext _localctx = new SymbolDefinitionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_symbolDefinition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(84); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(80);
				indent();
				setState(81);
				((SymbolDefinitionContext)_localctx).ruleCall = ruleCall();
				((SymbolDefinitionContext)_localctx).rules.add(((SymbolDefinitionContext)_localctx).ruleCall);
				setState(82);
				eos();
				}
				}
				setState(86); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==Tab );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionSequenceContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(GeolangParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(GeolangParser.Comma, i);
		}
		public ExpressionSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionSequence; }
	}

	public final ExpressionSequenceContext expressionSequence() throws RecognitionException {
		ExpressionSequenceContext _localctx = new ExpressionSequenceContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_expressionSequence);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(88);
			expression(0);
			setState(93);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(89);
				match(Comma);
				setState(90);
				expression(0);
				}
				}
				setState(95);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class RuleCallExpressionContext extends ExpressionContext {
		public RuleCallContext ruleCall() {
			return getRuleContext(RuleCallContext.class,0);
		}
		public RuleCallExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class AdditiveExpressionContext extends ExpressionContext {
		public ExpressionContext left;
		public Token op;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode Plus() { return getToken(GeolangParser.Plus, 0); }
		public TerminalNode Minus() { return getToken(GeolangParser.Minus, 0); }
		public AdditiveExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class RelationalExpressionContext extends ExpressionContext {
		public ExpressionContext left;
		public Token op;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LessThan() { return getToken(GeolangParser.LessThan, 0); }
		public TerminalNode MoreThan() { return getToken(GeolangParser.MoreThan, 0); }
		public TerminalNode GreaterThanEquals() { return getToken(GeolangParser.GreaterThanEquals, 0); }
		public TerminalNode LessThanEquals() { return getToken(GeolangParser.LessThanEquals, 0); }
		public RelationalExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class LiteralExpressionContext extends ExpressionContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public LiteralExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class IndexExpressionContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode OpenBracket() { return getToken(GeolangParser.OpenBracket, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public TerminalNode CloseBracket() { return getToken(GeolangParser.CloseBracket, 0); }
		public IndexExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class EqualityExpressionContext extends ExpressionContext {
		public ExpressionContext left;
		public Token op;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode Equals_() { return getToken(GeolangParser.Equals_, 0); }
		public TerminalNode NotEquals() { return getToken(GeolangParser.NotEquals, 0); }
		public EqualityExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class MultiplicativeExpressionContext extends ExpressionContext {
		public ExpressionContext left;
		public Token op;
		public ExpressionContext right;
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode Multiply() { return getToken(GeolangParser.Multiply, 0); }
		public TerminalNode Divide() { return getToken(GeolangParser.Divide, 0); }
		public TerminalNode Modulus() { return getToken(GeolangParser.Modulus, 0); }
		public MultiplicativeExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}
	public static class IdentifierExpressionContext extends ExpressionContext {
		public TerminalNode Identifier() { return getToken(GeolangParser.Identifier, 0); }
		public IdentifierExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 18;
		enterRecursionRule(_localctx, 18, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				{
				_localctx = new RuleCallExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(97);
				ruleCall();
				}
				break;
			case 2:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(98);
				match(Identifier);
				}
				break;
			case 3:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(99);
				literal();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(121);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(119);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						((MultiplicativeExpressionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(102);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(103);
						((MultiplicativeExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Multiply) | (1L << Divide) | (1L << Modulus))) != 0)) ) {
							((MultiplicativeExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(104);
						((MultiplicativeExpressionContext)_localctx).right = expression(8);
						}
						break;
					case 2:
						{
						_localctx = new AdditiveExpressionContext(new ExpressionContext(_parentctx, _parentState));
						((AdditiveExpressionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(105);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(106);
						((AdditiveExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==Plus || _la==Minus) ) {
							((AdditiveExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(107);
						((AdditiveExpressionContext)_localctx).right = expression(7);
						}
						break;
					case 3:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						((RelationalExpressionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(108);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(109);
						((RelationalExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LessThan) | (1L << MoreThan) | (1L << LessThanEquals) | (1L << GreaterThanEquals))) != 0)) ) {
							((RelationalExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(110);
						((RelationalExpressionContext)_localctx).right = expression(6);
						}
						break;
					case 4:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						((EqualityExpressionContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(111);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(112);
						((EqualityExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==Equals_ || _la==NotEquals) ) {
							((EqualityExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(113);
						((EqualityExpressionContext)_localctx).right = expression(5);
						}
						break;
					case 5:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(114);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(115);
						match(OpenBracket);
						setState(116);
						expressionSequence();
						setState(117);
						match(CloseBracket);
						}
						break;
					}
					} 
				}
				setState(123);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,8,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class RuleCallContext extends ParserRuleContext {
		public RuleCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ruleCall; }
	 
		public RuleCallContext() { }
		public void copyFrom(RuleCallContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class CommandCallContext extends RuleCallContext {
		public Token command;
		public ExpressionSequenceContext parameters;
		public TerminalNode OpenParen() { return getToken(GeolangParser.OpenParen, 0); }
		public TerminalNode CloseParen() { return getToken(GeolangParser.CloseParen, 0); }
		public TerminalNode Identifier() { return getToken(GeolangParser.Identifier, 0); }
		public ExpressionSequenceContext expressionSequence() {
			return getRuleContext(ExpressionSequenceContext.class,0);
		}
		public CommandCallContext(RuleCallContext ctx) { copyFrom(ctx); }
	}

	public final RuleCallContext ruleCall() throws RecognitionException {
		RuleCallContext _localctx = new RuleCallContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_ruleCall);
		int _la;
		try {
			_localctx = new CommandCallContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(124);
			((CommandCallContext)_localctx).command = match(Identifier);
			setState(125);
			match(OpenParen);
			setState(127);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << Identifier) | (1L << DecimalLiteral) | (1L << StringLiteral))) != 0)) {
				{
				setState(126);
				((CommandCallContext)_localctx).parameters = expressionSequence();
				}
			}

			setState(129);
			match(CloseParen);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RuleSequenceContext extends ParserRuleContext {
		public RuleCallContext ruleCall() {
			return getRuleContext(RuleCallContext.class,0);
		}
		public List<TerminalNode> Comma() { return getTokens(GeolangParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(GeolangParser.Comma, i);
		}
		public List<RuleSequenceContext> ruleSequence() {
			return getRuleContexts(RuleSequenceContext.class);
		}
		public RuleSequenceContext ruleSequence(int i) {
			return getRuleContext(RuleSequenceContext.class,i);
		}
		public RuleSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ruleSequence; }
	}

	public final RuleSequenceContext ruleSequence() throws RecognitionException {
		RuleSequenceContext _localctx = new RuleSequenceContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_ruleSequence);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			ruleCall();
			setState(136);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(132);
					match(Comma);
					setState(133);
					ruleSequence();
					}
					} 
				}
				setState(138);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode DecimalLiteral() { return getToken(GeolangParser.DecimalLiteral, 0); }
		public TerminalNode StringLiteral() { return getToken(GeolangParser.StringLiteral, 0); }
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_literal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(139);
			_la = _input.LA(1);
			if ( !(_la==DecimalLiteral || _la==StringLiteral) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EosContext extends ParserRuleContext {
		public TerminalNode LineTerminator() { return getToken(GeolangParser.LineTerminator, 0); }
		public TerminalNode EOF() { return getToken(GeolangParser.EOF, 0); }
		public EosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_eos; }
	}

	public final EosContext eos() throws RecognitionException {
		EosContext _localctx = new EosContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_eos);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(141);
			_la = _input.LA(1);
			if ( !(_la==EOF || _la==LineTerminator) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IndentContext extends ParserRuleContext {
		public TerminalNode Tab() { return getToken(GeolangParser.Tab, 0); }
		public IndentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indent; }
	}

	public final IndentContext indent() throws RecognitionException {
		IndentContext _localctx = new IndentContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_indent);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(143);
			match(Tab);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 9:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 7);
		case 1:
			return precpred(_ctx, 6);
		case 2:
			return precpred(_ctx, 5);
		case 3:
			return precpred(_ctx, 4);
		case 4:
			return precpred(_ctx, 8);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3-\u0094\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\3\2\7\2#\n\2\f\2"+
		"\16\2&\13\2\3\2\3\2\3\3\3\3\3\3\3\3\5\3.\n\3\3\4\3\4\3\5\3\5\3\5\3\5\3"+
		"\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\5\bQ\n\b\3\t\3\t\3\t\3\t\6\tW\n\t"+
		"\r\t\16\tX\3\n\3\n\3\n\7\n^\n\n\f\n\16\na\13\n\3\13\3\13\3\13\3\13\5\13"+
		"g\n\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\7\13z\n\13\f\13\16\13}\13\13\3\f\3\f\3\f\5\f\u0082"+
		"\n\f\3\f\3\f\3\r\3\r\3\r\7\r\u0089\n\r\f\r\16\r\u008c\13\r\3\16\3\16\3"+
		"\17\3\17\3\20\3\20\3\20\2\3\24\21\2\4\6\b\n\f\16\20\22\24\26\30\32\34"+
		"\36\2\b\3\2\23\25\3\2\20\21\3\2\26\31\3\2\32\33\3\2()\3\3,,\2\u0095\2"+
		"$\3\2\2\2\4-\3\2\2\2\6/\3\2\2\2\b\61\3\2\2\2\n9\3\2\2\2\f=\3\2\2\2\16"+
		"P\3\2\2\2\20V\3\2\2\2\22Z\3\2\2\2\24f\3\2\2\2\26~\3\2\2\2\30\u0085\3\2"+
		"\2\2\32\u008d\3\2\2\2\34\u008f\3\2\2\2\36\u0091\3\2\2\2 #\5\4\3\2!#\7"+
		",\2\2\" \3\2\2\2\"!\3\2\2\2#&\3\2\2\2$\"\3\2\2\2$%\3\2\2\2%\'\3\2\2\2"+
		"&$\3\2\2\2\'(\7\2\2\3(\3\3\2\2\2).\5\6\4\2*.\5\b\5\2+.\5\f\7\2,.\5\n\6"+
		"\2-)\3\2\2\2-*\3\2\2\2-+\3\2\2\2-,\3\2\2\2.\5\3\2\2\2/\60\5\16\b\2\60"+
		"\7\3\2\2\2\61\62\7 \2\2\62\63\7\'\2\2\63\64\7!\2\2\64\65\7)\2\2\65\66"+
		"\7\"\2\2\66\67\7\'\2\2\678\5\34\17\28\t\3\2\2\29:\7&\2\2:;\5\24\13\2;"+
		"<\5\34\17\2<\13\3\2\2\2=>\5\22\n\2>?\5\34\17\2?\r\3\2\2\2@A\7\'\2\2AB"+
		"\7\16\2\2BC\7\7\2\2CD\5\24\13\2DE\7\b\2\2EF\7\16\2\2FG\5\34\17\2GH\5\20"+
		"\t\2HQ\3\2\2\2IJ\7\'\2\2JK\7\16\2\2KL\7%\2\2LM\7\16\2\2MN\5\34\17\2NO"+
		"\5\20\t\2OQ\3\2\2\2P@\3\2\2\2PI\3\2\2\2Q\17\3\2\2\2RS\5\36\20\2ST\5\26"+
		"\f\2TU\5\34\17\2UW\3\2\2\2VR\3\2\2\2WX\3\2\2\2XV\3\2\2\2XY\3\2\2\2Y\21"+
		"\3\2\2\2Z_\5\24\13\2[\\\7\f\2\2\\^\5\24\13\2][\3\2\2\2^a\3\2\2\2_]\3\2"+
		"\2\2_`\3\2\2\2`\23\3\2\2\2a_\3\2\2\2bc\b\13\1\2cg\5\26\f\2dg\7\'\2\2e"+
		"g\5\32\16\2fb\3\2\2\2fd\3\2\2\2fe\3\2\2\2g{\3\2\2\2hi\f\t\2\2ij\t\2\2"+
		"\2jz\5\24\13\nkl\f\b\2\2lm\t\3\2\2mz\5\24\13\tno\f\7\2\2op\t\4\2\2pz\5"+
		"\24\13\bqr\f\6\2\2rs\t\5\2\2sz\5\24\13\7tu\f\n\2\2uv\7\5\2\2vw\5\22\n"+
		"\2wx\7\6\2\2xz\3\2\2\2yh\3\2\2\2yk\3\2\2\2yn\3\2\2\2yq\3\2\2\2yt\3\2\2"+
		"\2z}\3\2\2\2{y\3\2\2\2{|\3\2\2\2|\25\3\2\2\2}{\3\2\2\2~\177\7\'\2\2\177"+
		"\u0081\7\7\2\2\u0080\u0082\5\22\n\2\u0081\u0080\3\2\2\2\u0081\u0082\3"+
		"\2\2\2\u0082\u0083\3\2\2\2\u0083\u0084\7\b\2\2\u0084\27\3\2\2\2\u0085"+
		"\u008a\5\26\f\2\u0086\u0087\7\f\2\2\u0087\u0089\5\30\r\2\u0088\u0086\3"+
		"\2\2\2\u0089\u008c\3\2\2\2\u008a\u0088\3\2\2\2\u008a\u008b\3\2\2\2\u008b"+
		"\31\3\2\2\2\u008c\u008a\3\2\2\2\u008d\u008e\t\6\2\2\u008e\33\3\2\2\2\u008f"+
		"\u0090\t\7\2\2\u0090\35\3\2\2\2\u0091\u0092\7*\2\2\u0092\37\3\2\2\2\r"+
		"\"$-PX_fy{\u0081\u008a";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}