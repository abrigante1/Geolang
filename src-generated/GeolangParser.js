"use strict";
// Generated from ./src/antlr/GeolangParser.g4 by ANTLR 4.7.3-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class GeolangParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(GeolangParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return GeolangParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "GeolangParser.g4"; }
    // @Override
    get ruleNames() { return GeolangParser.ruleNames; }
    // @Override
    get serializedATN() { return GeolangParser._serializedATN; }
    // @RuleVersion(0)
    compileUnit() {
        let _localctx = new CompileUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, GeolangParser.RULE_compileUnit);
        let _la;
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
                                throw new NoViableAltException_1.NoViableAltException(this);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, GeolangParser.RULE_statement);
        try {
            this.state = 43;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    declaration() {
        let _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, GeolangParser.RULE_declaration);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 45;
                this.symbolDeclaration();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    importStatement() {
        let _localctx = new ImportStatementContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    logStatement() {
        let _localctx = new LogStatementContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expressionStatement() {
        let _localctx = new ExpressionStatementContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    symbolDeclaration() {
        let _localctx = new SymbolDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, GeolangParser.RULE_symbolDeclaration);
        try {
            this.state = 78;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    _localctx = new SymbolConditionalDeclarationContext(_localctx);
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 62;
                        _localctx._symbol = this.match(GeolangParser.Identifier);
                        this.state = 63;
                        this.match(GeolangParser.Colon);
                        this.state = 64;
                        this.match(GeolangParser.OpenParen);
                        this.state = 65;
                        _localctx._conditional = this.expression(0);
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
                        _localctx._symbol = this.match(GeolangParser.Identifier);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    symbolDefinition() {
        let _localctx = new SymbolDefinitionContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, GeolangParser.RULE_symbolDefinition);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expressionSequence() {
        let _localctx = new ExpressionSequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, GeolangParser.RULE_expressionSequence);
        let _la;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 18;
        this.enterRecursionRule(_localctx, 18, GeolangParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 100;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
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
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 119;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new MultiplicativeExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GeolangParser.RULE_expression);
                                        this.state = 102;
                                        if (!(this.precpred(this._ctx, 7))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        }
                                        this.state = 103;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GeolangParser.Multiply) | (1 << GeolangParser.Divide) | (1 << GeolangParser.Modulus))) !== 0))) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 104;
                                        _localctx._right = this.expression(8);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new AdditiveExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GeolangParser.RULE_expression);
                                        this.state = 105;
                                        if (!(this.precpred(this._ctx, 6))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        }
                                        this.state = 106;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === GeolangParser.Plus || _la === GeolangParser.Minus)) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 107;
                                        _localctx._right = this.expression(7);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GeolangParser.RULE_expression);
                                        this.state = 108;
                                        if (!(this.precpred(this._ctx, 5))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        }
                                        this.state = 109;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GeolangParser.LessThan) | (1 << GeolangParser.MoreThan) | (1 << GeolangParser.LessThanEquals) | (1 << GeolangParser.GreaterThanEquals))) !== 0))) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 110;
                                        _localctx._right = this.expression(6);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        _localctx._left = _prevctx;
                                        this.pushNewRecursionContext(_localctx, _startState, GeolangParser.RULE_expression);
                                        this.state = 111;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 112;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === GeolangParser.Equals_ || _la === GeolangParser.NotEquals)) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 113;
                                        _localctx._right = this.expression(5);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
                                        this.pushNewRecursionContext(_localctx, _startState, GeolangParser.RULE_expression);
                                        this.state = 114;
                                        if (!(this.precpred(this._ctx, 8))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ruleCall() {
        let _localctx = new RuleCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, GeolangParser.RULE_ruleCall);
        let _la;
        try {
            _localctx = new CommandCallContext(_localctx);
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 124;
                _localctx._command = this.match(GeolangParser.Identifier);
                this.state = 125;
                this.match(GeolangParser.OpenParen);
                this.state = 127;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (GeolangParser.Identifier - 37)) | (1 << (GeolangParser.DecimalLiteral - 37)) | (1 << (GeolangParser.StringLiteral - 37)))) !== 0)) {
                    {
                        this.state = 126;
                        _localctx._parameters = this.expressionSequence();
                    }
                }
                this.state = 129;
                this.match(GeolangParser.CloseParen);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ruleSequence() {
        let _localctx = new RuleSequenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, GeolangParser.RULE_ruleSequence);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 131;
                this.ruleCall();
                this.state = 136;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    literal() {
        let _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, GeolangParser.RULE_literal);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 139;
                _la = this._input.LA(1);
                if (!(_la === GeolangParser.DecimalLiteral || _la === GeolangParser.StringLiteral)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    eos() {
        let _localctx = new EosContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, GeolangParser.RULE_eos);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 141;
                _la = this._input.LA(1);
                if (!(_la === GeolangParser.EOF || _la === GeolangParser.LineTerminator)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    indent() {
        let _localctx = new IndentContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, GeolangParser.RULE_indent);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 143;
                this.match(GeolangParser.Tab);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 9:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
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
    static get _ATN() {
        if (!GeolangParser.__ATN) {
            GeolangParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(GeolangParser._serializedATN));
        }
        return GeolangParser.__ATN;
    }
}
exports.GeolangParser = GeolangParser;
GeolangParser.MultiLineComment = 1;
GeolangParser.SingleLineComment = 2;
GeolangParser.OpenBracket = 3;
GeolangParser.CloseBracket = 4;
GeolangParser.OpenParen = 5;
GeolangParser.CloseParen = 6;
GeolangParser.OpenBrace = 7;
GeolangParser.CloseBrace = 8;
GeolangParser.SemiColon = 9;
GeolangParser.Comma = 10;
GeolangParser.QuestionMark = 11;
GeolangParser.Colon = 12;
GeolangParser.Dot = 13;
GeolangParser.Plus = 14;
GeolangParser.Minus = 15;
GeolangParser.Not = 16;
GeolangParser.Multiply = 17;
GeolangParser.Divide = 18;
GeolangParser.Modulus = 19;
GeolangParser.LessThan = 20;
GeolangParser.MoreThan = 21;
GeolangParser.LessThanEquals = 22;
GeolangParser.GreaterThanEquals = 23;
GeolangParser.Equals_ = 24;
GeolangParser.NotEquals = 25;
GeolangParser.And = 26;
GeolangParser.Or = 27;
GeolangParser.Layer = 28;
GeolangParser.Scene = 29;
GeolangParser.Import = 30;
GeolangParser.From = 31;
GeolangParser.As = 32;
GeolangParser.Use = 33;
GeolangParser.Where = 34;
GeolangParser.Default = 35;
GeolangParser.Log = 36;
GeolangParser.Identifier = 37;
GeolangParser.DecimalLiteral = 38;
GeolangParser.StringLiteral = 39;
GeolangParser.Tab = 40;
GeolangParser.WhiteSpace = 41;
GeolangParser.LineTerminator = 42;
GeolangParser.UnexpectedCharacter = 43;
GeolangParser.RULE_compileUnit = 0;
GeolangParser.RULE_statement = 1;
GeolangParser.RULE_declaration = 2;
GeolangParser.RULE_importStatement = 3;
GeolangParser.RULE_logStatement = 4;
GeolangParser.RULE_expressionStatement = 5;
GeolangParser.RULE_symbolDeclaration = 6;
GeolangParser.RULE_symbolDefinition = 7;
GeolangParser.RULE_expressionSequence = 8;
GeolangParser.RULE_expression = 9;
GeolangParser.RULE_ruleCall = 10;
GeolangParser.RULE_ruleSequence = 11;
GeolangParser.RULE_literal = 12;
GeolangParser.RULE_eos = 13;
GeolangParser.RULE_indent = 14;
// tslint:disable:no-trailing-whitespace
GeolangParser.ruleNames = [
    "compileUnit", "statement", "declaration", "importStatement", "logStatement",
    "expressionStatement", "symbolDeclaration", "symbolDefinition", "expressionSequence",
    "expression", "ruleCall", "ruleSequence", "literal", "eos", "indent",
];
GeolangParser._LITERAL_NAMES = [
    undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'",
    "';'", "','", "'?'", "':'", "'.'", "'+'", "'-'", "'!'", "'*'", "'/'",
    "'%'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", "'||'", "'layer'",
    "'scene'", "'import'", "'from'", "'as'", "'use'", "'where'", "'default'",
    "'log'", undefined, undefined, undefined, "'::'",
];
GeolangParser._SYMBOLIC_NAMES = [
    undefined, "MultiLineComment", "SingleLineComment", "OpenBracket", "CloseBracket",
    "OpenParen", "CloseParen", "OpenBrace", "CloseBrace", "SemiColon", "Comma",
    "QuestionMark", "Colon", "Dot", "Plus", "Minus", "Not", "Multiply", "Divide",
    "Modulus", "LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals",
    "Equals_", "NotEquals", "And", "Or", "Layer", "Scene", "Import", "From",
    "As", "Use", "Where", "Default", "Log", "Identifier", "DecimalLiteral",
    "StringLiteral", "Tab", "WhiteSpace", "LineTerminator", "UnexpectedCharacter",
];
GeolangParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(GeolangParser._LITERAL_NAMES, GeolangParser._SYMBOLIC_NAMES, []);
GeolangParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03-\x94\x04\x02" +
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
class CompileUnitContext extends ParserRuleContext_1.ParserRuleContext {
    EOF() { return this.getToken(GeolangParser.EOF, 0); }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    LineTerminator(i) {
        if (i === undefined) {
            return this.getTokens(GeolangParser.LineTerminator);
        }
        else {
            return this.getToken(GeolangParser.LineTerminator, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GeolangParser.RULE_compileUnit; }
    // @Override
    enterRule(listener) {
        if (listener.enterCompileUnit) {
            listener.enterCompileUnit(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCompileUnit) {
            listener.exitCompileUnit(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCompileUnit) {
            return visitor.visitCompileUnit(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CompileUnitContext = CompileUnitContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    declaration() {
        return this.tryGetRuleContext(0, DeclarationContext);
    }
    importStatement() {
        return this.tryGetRuleContext(0, ImportStatementContext);
    }
    expressionStatement() {
        return this.tryGetRuleContext(0, ExpressionStatementContext);
    }
    logStatement() {
        return this.tryGetRuleContext(0, LogStatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GeolangParser.RULE_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementContext = StatementContext;
class DeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    symbolDeclaration() {
        return this.getRuleContext(0, SymbolDeclarationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GeolangParser.RULE_declaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterDeclaration) {
            listener.enterDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDeclaration) {
            listener.exitDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDeclaration) {
            return visitor.visitDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DeclarationContext = DeclarationContext;
class ImportStatementContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Import() { return this.getToken(GeolangParser.Import, 0); }
    From() { return this.getToken(GeolangParser.From, 0); }
    As() { return this.getToken(GeolangParser.As, 0); }
    eos() {
        return this.getRuleContext(0, EosContext);
    }
    Identifier(i) {
        if (i === undefined) {
            return this.getTokens(GeolangParser.Identifier);
        }
        else {
            return this.getToken(GeolangParser.Identifier, i);
        }
    }
    StringLiteral() { return this.getToken(GeolangParser.StringLiteral, 0); }
    // @Override
    get ruleIndex() { return GeolangParser.RULE_importStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterImportStatement) {
            listener.enterImportStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImportStatement) {
            listener.exitImportStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImportStatement) {
            return visitor.visitImportStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImportStatementContext = ImportStatementContext;
class LogStatementContext extends ParserRuleContext_1.ParserRuleContext {
    Log() { return this.getToken(GeolangParser.Log, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    eos() {
        return this.getRuleContext(0, EosContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GeolangParser.RULE_logStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterLogStatement) {
            listener.enterLogStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLogStatement) {
            listener.exitLogStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLogStatement) {
            return visitor.visitLogStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LogStatementContext = LogStatementContext;
class ExpressionStatementContext extends ParserRuleContext_1.ParserRuleContext {
    expressionSequence() {
        return this.getRuleContext(0, ExpressionSequenceContext);
    }
    eos() {
        return this.getRuleContext(0, EosContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GeolangParser.RULE_expressionStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpressionStatement) {
            listener.enterExpressionStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpressionStatement) {
            listener.exitExpressionStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpressionStatement) {
            return visitor.visitExpressionStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionStatementContext = ExpressionStatementContext;
class SymbolDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GeolangParser.RULE_symbolDeclaration; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.SymbolDeclarationContext = SymbolDeclarationContext;
class SymbolConditionalDeclarationContext extends SymbolDeclarationContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    Colon(i) {
        if (i === undefined) {
            return this.getTokens(GeolangParser.Colon);
        }
        else {
            return this.getToken(GeolangParser.Colon, i);
        }
    }
    OpenParen() { return this.getToken(GeolangParser.OpenParen, 0); }
    CloseParen() { return this.getToken(GeolangParser.CloseParen, 0); }
    eos() {
        return this.getRuleContext(0, EosContext);
    }
    symbolDefinition() {
        return this.getRuleContext(0, SymbolDefinitionContext);
    }
    Identifier() { return this.getToken(GeolangParser.Identifier, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterSymbolConditionalDeclaration) {
            listener.enterSymbolConditionalDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSymbolConditionalDeclaration) {
            listener.exitSymbolConditionalDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSymbolConditionalDeclaration) {
            return visitor.visitSymbolConditionalDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SymbolConditionalDeclarationContext = SymbolConditionalDeclarationContext;
class SymbolDefaultDeclarationContext extends SymbolDeclarationContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    Colon(i) {
        if (i === undefined) {
            return this.getTokens(GeolangParser.Colon);
        }
        else {
            return this.getToken(GeolangParser.Colon, i);
        }
    }
    Default() { return this.getToken(GeolangParser.Default, 0); }
    eos() {
        return this.getRuleContext(0, EosContext);
    }
    symbolDefinition() {
        return this.getRuleContext(0, SymbolDefinitionContext);
    }
    Identifier() { return this.getToken(GeolangParser.Identifier, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterSymbolDefaultDeclaration) {
            listener.enterSymbolDefaultDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSymbolDefaultDeclaration) {
            listener.exitSymbolDefaultDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSymbolDefaultDeclaration) {
            return visitor.visitSymbolDefaultDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SymbolDefaultDeclarationContext = SymbolDefaultDeclarationContext;
class SymbolDefinitionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
        this._rules = [];
    }
    indent(i) {
        if (i === undefined) {
            return this.getRuleContexts(IndentContext);
        }
        else {
            return this.getRuleContext(i, IndentContext);
        }
    }
    eos(i) {
        if (i === undefined) {
            return this.getRuleContexts(EosContext);
        }
        else {
            return this.getRuleContext(i, EosContext);
        }
    }
    ruleCall(i) {
        if (i === undefined) {
            return this.getRuleContexts(RuleCallContext);
        }
        else {
            return this.getRuleContext(i, RuleCallContext);
        }
    }
    // @Override
    get ruleIndex() { return GeolangParser.RULE_symbolDefinition; }
    // @Override
    enterRule(listener) {
        if (listener.enterSymbolDefinition) {
            listener.enterSymbolDefinition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSymbolDefinition) {
            listener.exitSymbolDefinition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSymbolDefinition) {
            return visitor.visitSymbolDefinition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SymbolDefinitionContext = SymbolDefinitionContext;
class ExpressionSequenceContext extends ParserRuleContext_1.ParserRuleContext {
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    Comma(i) {
        if (i === undefined) {
            return this.getTokens(GeolangParser.Comma);
        }
        else {
            return this.getToken(GeolangParser.Comma, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GeolangParser.RULE_expressionSequence; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpressionSequence) {
            listener.enterExpressionSequence(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpressionSequence) {
            listener.exitExpressionSequence(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpressionSequence) {
            return visitor.visitExpressionSequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionSequenceContext = ExpressionSequenceContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GeolangParser.RULE_expression; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.ExpressionContext = ExpressionContext;
class IndexExpressionContext extends ExpressionContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    OpenBracket() { return this.getToken(GeolangParser.OpenBracket, 0); }
    expressionSequence() {
        return this.getRuleContext(0, ExpressionSequenceContext);
    }
    CloseBracket() { return this.getToken(GeolangParser.CloseBracket, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIndexExpression) {
            listener.enterIndexExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIndexExpression) {
            listener.exitIndexExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIndexExpression) {
            return visitor.visitIndexExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IndexExpressionContext = IndexExpressionContext;
class MultiplicativeExpressionContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    Multiply() { return this.tryGetToken(GeolangParser.Multiply, 0); }
    Divide() { return this.tryGetToken(GeolangParser.Divide, 0); }
    Modulus() { return this.tryGetToken(GeolangParser.Modulus, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiplicativeExpression) {
            listener.enterMultiplicativeExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiplicativeExpression) {
            listener.exitMultiplicativeExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiplicativeExpression) {
            return visitor.visitMultiplicativeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultiplicativeExpressionContext = MultiplicativeExpressionContext;
class AdditiveExpressionContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    Plus() { return this.tryGetToken(GeolangParser.Plus, 0); }
    Minus() { return this.tryGetToken(GeolangParser.Minus, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterAdditiveExpression) {
            listener.enterAdditiveExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAdditiveExpression) {
            listener.exitAdditiveExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAdditiveExpression) {
            return visitor.visitAdditiveExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AdditiveExpressionContext = AdditiveExpressionContext;
class RelationalExpressionContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    LessThan() { return this.tryGetToken(GeolangParser.LessThan, 0); }
    MoreThan() { return this.tryGetToken(GeolangParser.MoreThan, 0); }
    GreaterThanEquals() { return this.tryGetToken(GeolangParser.GreaterThanEquals, 0); }
    LessThanEquals() { return this.tryGetToken(GeolangParser.LessThanEquals, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterRelationalExpression) {
            listener.enterRelationalExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRelationalExpression) {
            listener.exitRelationalExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRelationalExpression) {
            return visitor.visitRelationalExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RelationalExpressionContext = RelationalExpressionContext;
class EqualityExpressionContext extends ExpressionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    Equals_() { return this.tryGetToken(GeolangParser.Equals_, 0); }
    NotEquals() { return this.tryGetToken(GeolangParser.NotEquals, 0); }
    // @Override
    enterRule(listener) {
        if (listener.enterEqualityExpression) {
            listener.enterEqualityExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEqualityExpression) {
            listener.exitEqualityExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEqualityExpression) {
            return visitor.visitEqualityExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EqualityExpressionContext = EqualityExpressionContext;
class RuleCallExpressionContext extends ExpressionContext {
    ruleCall() {
        return this.getRuleContext(0, RuleCallContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterRuleCallExpression) {
            listener.enterRuleCallExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRuleCallExpression) {
            listener.exitRuleCallExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRuleCallExpression) {
            return visitor.visitRuleCallExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RuleCallExpressionContext = RuleCallExpressionContext;
class IdentifierExpressionContext extends ExpressionContext {
    Identifier() { return this.getToken(GeolangParser.Identifier, 0); }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifierExpression) {
            listener.enterIdentifierExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifierExpression) {
            listener.exitIdentifierExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifierExpression) {
            return visitor.visitIdentifierExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierExpressionContext = IdentifierExpressionContext;
class LiteralExpressionContext extends ExpressionContext {
    literal() {
        return this.getRuleContext(0, LiteralContext);
    }
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterLiteralExpression) {
            listener.enterLiteralExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLiteralExpression) {
            listener.exitLiteralExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLiteralExpression) {
            return visitor.visitLiteralExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LiteralExpressionContext = LiteralExpressionContext;
class RuleCallContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GeolangParser.RULE_ruleCall; }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.RuleCallContext = RuleCallContext;
class CommandCallContext extends RuleCallContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        this.copyFrom(ctx);
    }
    OpenParen() { return this.getToken(GeolangParser.OpenParen, 0); }
    CloseParen() { return this.getToken(GeolangParser.CloseParen, 0); }
    Identifier() { return this.getToken(GeolangParser.Identifier, 0); }
    expressionSequence() {
        return this.tryGetRuleContext(0, ExpressionSequenceContext);
    }
    // @Override
    enterRule(listener) {
        if (listener.enterCommandCall) {
            listener.enterCommandCall(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCommandCall) {
            listener.exitCommandCall(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCommandCall) {
            return visitor.visitCommandCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CommandCallContext = CommandCallContext;
class RuleSequenceContext extends ParserRuleContext_1.ParserRuleContext {
    ruleCall() {
        return this.getRuleContext(0, RuleCallContext);
    }
    Comma(i) {
        if (i === undefined) {
            return this.getTokens(GeolangParser.Comma);
        }
        else {
            return this.getToken(GeolangParser.Comma, i);
        }
    }
    ruleSequence(i) {
        if (i === undefined) {
            return this.getRuleContexts(RuleSequenceContext);
        }
        else {
            return this.getRuleContext(i, RuleSequenceContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GeolangParser.RULE_ruleSequence; }
    // @Override
    enterRule(listener) {
        if (listener.enterRuleSequence) {
            listener.enterRuleSequence(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRuleSequence) {
            listener.exitRuleSequence(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRuleSequence) {
            return visitor.visitRuleSequence(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RuleSequenceContext = RuleSequenceContext;
class LiteralContext extends ParserRuleContext_1.ParserRuleContext {
    DecimalLiteral() { return this.tryGetToken(GeolangParser.DecimalLiteral, 0); }
    StringLiteral() { return this.tryGetToken(GeolangParser.StringLiteral, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GeolangParser.RULE_literal; }
    // @Override
    enterRule(listener) {
        if (listener.enterLiteral) {
            listener.enterLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLiteral) {
            listener.exitLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LiteralContext = LiteralContext;
class EosContext extends ParserRuleContext_1.ParserRuleContext {
    LineTerminator() { return this.tryGetToken(GeolangParser.LineTerminator, 0); }
    EOF() { return this.tryGetToken(GeolangParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GeolangParser.RULE_eos; }
    // @Override
    enterRule(listener) {
        if (listener.enterEos) {
            listener.enterEos(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEos) {
            listener.exitEos(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEos) {
            return visitor.visitEos(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EosContext = EosContext;
class IndentContext extends ParserRuleContext_1.ParserRuleContext {
    Tab() { return this.getToken(GeolangParser.Tab, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return GeolangParser.RULE_indent; }
    // @Override
    enterRule(listener) {
        if (listener.enterIndent) {
            listener.enterIndent(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIndent) {
            listener.exitIndent(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIndent) {
            return visitor.visitIndent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IndentContext = IndentContext;
//# sourceMappingURL=GeolangParser.js.map