// Generated from c:\Users\Anthony\GoogleDrive\DigiPen\Years\Year5\Semester9\CS375\Development\GeolangNodeServer\src\antlr\GeolangLexer.g4 by ANTLR 4.8
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class GeolangLexer extends Lexer {
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
		WS_CHANNEL=2, ERROR=3;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "WS_CHANNEL", "ERROR"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"MultiLineComment", "SingleLineComment", "OpenBracket", "CloseBracket", 
			"OpenParen", "CloseParen", "OpenBrace", "CloseBrace", "SemiColon", "Comma", 
			"QuestionMark", "Colon", "Dot", "Plus", "Minus", "Not", "Multiply", "Divide", 
			"Modulus", "LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", 
			"Equals_", "NotEquals", "And", "Or", "Layer", "Scene", "Import", "From", 
			"As", "Use", "Where", "Default", "Log", "Identifier", "DecimalLiteral", 
			"StringLiteral", "Tab", "WhiteSpace", "LineTerminator", "UnexpectedCharacter", 
			"DoubleStringCharacter", "SingleStringCharacter", "EscapeSequence", "CharacterEscapeSequence", 
			"SingleEscapeCharacter", "NonEscapeCharacter", "EscapeCharacter", "LineContinuation", 
			"DecimalIntegerLiteral", "IdentifierPart", "IdentifierStart", "Letter", 
			"Digit", "ConnectorPunctuation"
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


	public GeolangLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "GeolangLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2-\u0174\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\3\2\3\2\3\2\3\2\7"+
		"\2z\n\2\f\2\16\2}\13\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\7\3\u0088\n"+
		"\3\f\3\16\3\u008b\13\3\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b"+
		"\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3"+
		"\20\3\21\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3"+
		"\27\3\27\3\30\3\30\3\30\3\31\3\31\3\31\3\32\3\32\3\32\3\33\3\33\3\33\3"+
		"\34\3\34\3\34\3\35\3\35\3\35\3\35\3\35\3\35\3\36\3\36\3\36\3\36\3\36\3"+
		"\36\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3 \3 \3 \3 \3 \3!\3!\3!\3\"\3\""+
		"\3\"\3\"\3#\3#\3#\3#\3#\3#\3$\3$\3$\3$\3$\3$\3$\3$\3%\3%\3%\3%\3&\3&\7"+
		"&\u00fa\n&\f&\16&\u00fd\13&\3\'\5\'\u0100\n\'\3\'\3\'\3\'\7\'\u0105\n"+
		"\'\f\'\16\'\u0108\13\'\5\'\u010a\n\'\3\'\3\'\6\'\u010e\n\'\r\'\16\'\u010f"+
		"\5\'\u0112\n\'\3(\3(\7(\u0116\n(\f(\16(\u0119\13(\3(\7(\u011c\n(\f(\16"+
		"(\u011f\13(\3(\3(\7(\u0123\n(\f(\16(\u0126\13(\3(\5(\u0129\n(\3)\3)\3"+
		")\3*\6*\u012f\n*\r*\16*\u0130\3*\3*\3+\3+\3,\3,\3,\3,\3-\3-\3-\3-\5-\u013f"+
		"\n-\3.\3.\3.\3.\5.\u0145\n.\3/\3/\5/\u0149\n/\3\60\3\60\5\60\u014d\n\60"+
		"\3\61\3\61\3\62\3\62\3\63\3\63\5\63\u0155\n\63\3\64\3\64\3\64\3\65\3\65"+
		"\3\65\7\65\u015d\n\65\f\65\16\65\u0160\13\65\5\65\u0162\n\65\3\66\3\66"+
		"\3\66\3\66\5\66\u0168\n\66\3\67\3\67\5\67\u016c\n\67\38\58\u016f\n8\3"+
		"9\39\3:\3:\3{\2;\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31"+
		"\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65"+
		"\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y\2[\2]\2_\2a\2c\2e\2g"+
		"\2i\2k\2m\2o\2q\2s\2\3\2\16\5\2\f\f\17\17\u202a\u202b\3\2\63;\3\2\62;"+
		"\4\2\16\16\"\"\6\2\f\f\17\17$$^^\6\2\f\f\17\17))^^\13\2$$))^^ddhhpptt"+
		"vvxx\16\2\f\f\17\17$$))\62;^^ddhhppttvxzz\5\2\62;wwzz\4\2\62;aa\4\2&&"+
		"aa\4\2C\\c|\2\u017f\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2"+
		"\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3"+
		"\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2"+
		"\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2"+
		"\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2"+
		"\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2"+
		"\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2O\3\2\2\2\2Q"+
		"\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\3u\3\2\2\2\5\u0083\3\2\2\2\7"+
		"\u008e\3\2\2\2\t\u0090\3\2\2\2\13\u0092\3\2\2\2\r\u0094\3\2\2\2\17\u0096"+
		"\3\2\2\2\21\u0098\3\2\2\2\23\u009a\3\2\2\2\25\u009c\3\2\2\2\27\u009e\3"+
		"\2\2\2\31\u00a0\3\2\2\2\33\u00a2\3\2\2\2\35\u00a4\3\2\2\2\37\u00a6\3\2"+
		"\2\2!\u00a8\3\2\2\2#\u00aa\3\2\2\2%\u00ac\3\2\2\2\'\u00ae\3\2\2\2)\u00b0"+
		"\3\2\2\2+\u00b2\3\2\2\2-\u00b4\3\2\2\2/\u00b7\3\2\2\2\61\u00ba\3\2\2\2"+
		"\63\u00bd\3\2\2\2\65\u00c0\3\2\2\2\67\u00c3\3\2\2\29\u00c6\3\2\2\2;\u00cc"+
		"\3\2\2\2=\u00d2\3\2\2\2?\u00d9\3\2\2\2A\u00de\3\2\2\2C\u00e1\3\2\2\2E"+
		"\u00e5\3\2\2\2G\u00eb\3\2\2\2I\u00f3\3\2\2\2K\u00f7\3\2\2\2M\u00ff\3\2"+
		"\2\2O\u0128\3\2\2\2Q\u012a\3\2\2\2S\u012e\3\2\2\2U\u0134\3\2\2\2W\u0136"+
		"\3\2\2\2Y\u013e\3\2\2\2[\u0144\3\2\2\2]\u0148\3\2\2\2_\u014c\3\2\2\2a"+
		"\u014e\3\2\2\2c\u0150\3\2\2\2e\u0154\3\2\2\2g\u0156\3\2\2\2i\u0161\3\2"+
		"\2\2k\u0167\3\2\2\2m\u016b\3\2\2\2o\u016e\3\2\2\2q\u0170\3\2\2\2s\u0172"+
		"\3\2\2\2uv\7\61\2\2vw\7,\2\2w{\3\2\2\2xz\13\2\2\2yx\3\2\2\2z}\3\2\2\2"+
		"{|\3\2\2\2{y\3\2\2\2|~\3\2\2\2}{\3\2\2\2~\177\7,\2\2\177\u0080\7\61\2"+
		"\2\u0080\u0081\3\2\2\2\u0081\u0082\b\2\2\2\u0082\4\3\2\2\2\u0083\u0084"+
		"\7\61\2\2\u0084\u0085\7\61\2\2\u0085\u0089\3\2\2\2\u0086\u0088\n\2\2\2"+
		"\u0087\u0086\3\2\2\2\u0088\u008b\3\2\2\2\u0089\u0087\3\2\2\2\u0089\u008a"+
		"\3\2\2\2\u008a\u008c\3\2\2\2\u008b\u0089\3\2\2\2\u008c\u008d\b\3\2\2\u008d"+
		"\6\3\2\2\2\u008e\u008f\7]\2\2\u008f\b\3\2\2\2\u0090\u0091\7_\2\2\u0091"+
		"\n\3\2\2\2\u0092\u0093\7*\2\2\u0093\f\3\2\2\2\u0094\u0095\7+\2\2\u0095"+
		"\16\3\2\2\2\u0096\u0097\7}\2\2\u0097\20\3\2\2\2\u0098\u0099\7\177\2\2"+
		"\u0099\22\3\2\2\2\u009a\u009b\7=\2\2\u009b\24\3\2\2\2\u009c\u009d\7.\2"+
		"\2\u009d\26\3\2\2\2\u009e\u009f\7A\2\2\u009f\30\3\2\2\2\u00a0\u00a1\7"+
		"<\2\2\u00a1\32\3\2\2\2\u00a2\u00a3\7\60\2\2\u00a3\34\3\2\2\2\u00a4\u00a5"+
		"\7-\2\2\u00a5\36\3\2\2\2\u00a6\u00a7\7/\2\2\u00a7 \3\2\2\2\u00a8\u00a9"+
		"\7#\2\2\u00a9\"\3\2\2\2\u00aa\u00ab\7,\2\2\u00ab$\3\2\2\2\u00ac\u00ad"+
		"\7\61\2\2\u00ad&\3\2\2\2\u00ae\u00af\7\'\2\2\u00af(\3\2\2\2\u00b0\u00b1"+
		"\7>\2\2\u00b1*\3\2\2\2\u00b2\u00b3\7@\2\2\u00b3,\3\2\2\2\u00b4\u00b5\7"+
		">\2\2\u00b5\u00b6\7?\2\2\u00b6.\3\2\2\2\u00b7\u00b8\7@\2\2\u00b8\u00b9"+
		"\7?\2\2\u00b9\60\3\2\2\2\u00ba\u00bb\7?\2\2\u00bb\u00bc\7?\2\2\u00bc\62"+
		"\3\2\2\2\u00bd\u00be\7#\2\2\u00be\u00bf\7?\2\2\u00bf\64\3\2\2\2\u00c0"+
		"\u00c1\7(\2\2\u00c1\u00c2\7(\2\2\u00c2\66\3\2\2\2\u00c3\u00c4\7~\2\2\u00c4"+
		"\u00c5\7~\2\2\u00c58\3\2\2\2\u00c6\u00c7\7n\2\2\u00c7\u00c8\7c\2\2\u00c8"+
		"\u00c9\7{\2\2\u00c9\u00ca\7g\2\2\u00ca\u00cb\7t\2\2\u00cb:\3\2\2\2\u00cc"+
		"\u00cd\7u\2\2\u00cd\u00ce\7e\2\2\u00ce\u00cf\7g\2\2\u00cf\u00d0\7p\2\2"+
		"\u00d0\u00d1\7g\2\2\u00d1<\3\2\2\2\u00d2\u00d3\7k\2\2\u00d3\u00d4\7o\2"+
		"\2\u00d4\u00d5\7r\2\2\u00d5\u00d6\7q\2\2\u00d6\u00d7\7t\2\2\u00d7\u00d8"+
		"\7v\2\2\u00d8>\3\2\2\2\u00d9\u00da\7h\2\2\u00da\u00db\7t\2\2\u00db\u00dc"+
		"\7q\2\2\u00dc\u00dd\7o\2\2\u00dd@\3\2\2\2\u00de\u00df\7c\2\2\u00df\u00e0"+
		"\7u\2\2\u00e0B\3\2\2\2\u00e1\u00e2\7w\2\2\u00e2\u00e3\7u\2\2\u00e3\u00e4"+
		"\7g\2\2\u00e4D\3\2\2\2\u00e5\u00e6\7y\2\2\u00e6\u00e7\7j\2\2\u00e7\u00e8"+
		"\7g\2\2\u00e8\u00e9\7t\2\2\u00e9\u00ea\7g\2\2\u00eaF\3\2\2\2\u00eb\u00ec"+
		"\7f\2\2\u00ec\u00ed\7g\2\2\u00ed\u00ee\7h\2\2\u00ee\u00ef\7c\2\2\u00ef"+
		"\u00f0\7w\2\2\u00f0\u00f1\7n\2\2\u00f1\u00f2\7v\2\2\u00f2H\3\2\2\2\u00f3"+
		"\u00f4\7n\2\2\u00f4\u00f5\7q\2\2\u00f5\u00f6\7i\2\2\u00f6J\3\2\2\2\u00f7"+
		"\u00fb\5m\67\2\u00f8\u00fa\5k\66\2\u00f9\u00f8\3\2\2\2\u00fa\u00fd\3\2"+
		"\2\2\u00fb\u00f9\3\2\2\2\u00fb\u00fc\3\2\2\2\u00fcL\3\2\2\2\u00fd\u00fb"+
		"\3\2\2\2\u00fe\u0100\7/\2\2\u00ff\u00fe\3\2\2\2\u00ff\u0100\3\2\2\2\u0100"+
		"\u0109\3\2\2\2\u0101\u010a\7\62\2\2\u0102\u0106\t\3\2\2\u0103\u0105\t"+
		"\4\2\2\u0104\u0103\3\2\2\2\u0105\u0108\3\2\2\2\u0106\u0104\3\2\2\2\u0106"+
		"\u0107\3\2\2\2\u0107\u010a\3\2\2\2\u0108\u0106\3\2\2\2\u0109\u0101\3\2"+
		"\2\2\u0109\u0102\3\2\2\2\u010a\u0111\3\2\2\2\u010b\u010d\7\60\2\2\u010c"+
		"\u010e\t\4\2\2\u010d\u010c\3\2\2\2\u010e\u010f\3\2\2\2\u010f\u010d\3\2"+
		"\2\2\u010f\u0110\3\2\2\2\u0110\u0112\3\2\2\2\u0111\u010b\3\2\2\2\u0111"+
		"\u0112\3\2\2\2\u0112N\3\2\2\2\u0113\u0117\7$\2\2\u0114\u0116\5Y-\2\u0115"+
		"\u0114\3\2\2\2\u0116\u0119\3\2\2\2\u0117\u0115\3\2\2\2\u0117\u0118\3\2"+
		"\2\2\u0118\u011d\3\2\2\2\u0119\u0117\3\2\2\2\u011a\u011c\7$\2\2\u011b"+
		"\u011a\3\2\2\2\u011c\u011f\3\2\2\2\u011d\u011b\3\2\2\2\u011d\u011e\3\2"+
		"\2\2\u011e\u0129\3\2\2\2\u011f\u011d\3\2\2\2\u0120\u0124\7)\2\2\u0121"+
		"\u0123\5[.\2\u0122\u0121\3\2\2\2\u0123\u0126\3\2\2\2\u0124\u0122\3\2\2"+
		"\2\u0124\u0125\3\2\2\2\u0125\u0127\3\2\2\2\u0126\u0124\3\2\2\2\u0127\u0129"+
		"\7)\2\2\u0128\u0113\3\2\2\2\u0128\u0120\3\2\2\2\u0129P\3\2\2\2\u012a\u012b"+
		"\7<\2\2\u012b\u012c\7<\2\2\u012cR\3\2\2\2\u012d\u012f\t\5\2\2\u012e\u012d"+
		"\3\2\2\2\u012f\u0130\3\2\2\2\u0130\u012e\3\2\2\2\u0130\u0131\3\2\2\2\u0131"+
		"\u0132\3\2\2\2\u0132\u0133\b*\2\2\u0133T\3\2\2\2\u0134\u0135\t\2\2\2\u0135"+
		"V\3\2\2\2\u0136\u0137\13\2\2\2\u0137\u0138\3\2\2\2\u0138\u0139\b,\3\2"+
		"\u0139X\3\2\2\2\u013a\u013f\n\6\2\2\u013b\u013c\7^\2\2\u013c\u013f\5]"+
		"/\2\u013d\u013f\5g\64\2\u013e\u013a\3\2\2\2\u013e\u013b\3\2\2\2\u013e"+
		"\u013d\3\2\2\2\u013fZ\3\2\2\2\u0140\u0145\n\7\2\2\u0141\u0142\7^\2\2\u0142"+
		"\u0145\5]/\2\u0143\u0145\5g\64\2\u0144\u0140\3\2\2\2\u0144\u0141\3\2\2"+
		"\2\u0144\u0143\3\2\2\2\u0145\\\3\2\2\2\u0146\u0149\5_\60\2\u0147\u0149"+
		"\7\62\2\2\u0148\u0146\3\2\2\2\u0148\u0147\3\2\2\2\u0149^\3\2\2\2\u014a"+
		"\u014d\5a\61\2\u014b\u014d\5c\62\2\u014c\u014a\3\2\2\2\u014c\u014b\3\2"+
		"\2\2\u014d`\3\2\2\2\u014e\u014f\t\b\2\2\u014fb\3\2\2\2\u0150\u0151\n\t"+
		"\2\2\u0151d\3\2\2\2\u0152\u0155\5a\61\2\u0153\u0155\t\n\2\2\u0154\u0152"+
		"\3\2\2\2\u0154\u0153\3\2\2\2\u0155f\3\2\2\2\u0156\u0157\7^\2\2\u0157\u0158"+
		"\t\2\2\2\u0158h\3\2\2\2\u0159\u0162\7\62\2\2\u015a\u015e\t\3\2\2\u015b"+
		"\u015d\t\13\2\2\u015c\u015b\3\2\2\2\u015d\u0160\3\2\2\2\u015e\u015c\3"+
		"\2\2\2\u015e\u015f\3\2\2\2\u015f\u0162\3\2\2\2\u0160\u015e\3\2\2\2\u0161"+
		"\u0159\3\2\2\2\u0161\u015a\3\2\2\2\u0162j\3\2\2\2\u0163\u0168\5m\67\2"+
		"\u0164\u0168\5q9\2\u0165\u0168\5s:\2\u0166\u0168\4\u200e\u200f\2\u0167"+
		"\u0163\3\2\2\2\u0167\u0164\3\2\2\2\u0167\u0165\3\2\2\2\u0167\u0166\3\2"+
		"\2\2\u0168l\3\2\2\2\u0169\u016c\5o8\2\u016a\u016c\t\f\2\2\u016b\u0169"+
		"\3\2\2\2\u016b\u016a\3\2\2\2\u016cn\3\2\2\2\u016d\u016f\t\r\2\2\u016e"+
		"\u016d\3\2\2\2\u016fp\3\2\2\2\u0170\u0171\t\4\2\2\u0171r\3\2\2\2\u0172"+
		"\u0173\7a\2\2\u0173t\3\2\2\2\32\2{\u0089\u00fb\u00ff\u0106\u0109\u010f"+
		"\u0111\u0117\u011d\u0124\u0128\u0130\u013e\u0144\u0148\u014c\u0154\u015e"+
		"\u0161\u0167\u016b\u016e\4\2\3\2\2\5\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}