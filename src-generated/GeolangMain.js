"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const GeolangASTBuilder_1 = require("./GeolangASTBuilder");
const GeolangLexer_1 = require("./GeolangLexer");
const GeolangParser_1 = require("./GeolangParser");
const GeolangTokensProvider_1 = require("./GeolangTokensProvider");
const GeolangP5Generator_1 = require("./GeolangP5Generator");
/**
 * Class the takes in an input string, parses it, and returns the
 * generated P5.
 *
 * @param source input source code to parse and generate AST from
 * @returns Transpiled P5 String
 */
function GeolangMain(source) {
    let inputStream = new antlr4ts_1.ANTLRInputStream(source);
    let lexer = new GeolangLexer_1.GeolangLexer(inputStream);
    let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    let parser = new GeolangParser_1.GeolangParser(tokenStream);
    let ctx = parser.compileUnit();
    let astBuilder = new GeolangASTBuilder_1.GeolangASTBuilder();
    astBuilder.visitCompileUnit(ctx);
    console.log(astBuilder.root);
    //let astVisiter = new GeolangD3Generator();
    let astVisiter = new GeolangP5Generator_1.GeolangP5Generator();
    astVisiter.visitSketchNode(astBuilder.root);
    return astVisiter.p5instance.formatScript();
}
exports.GeolangMain = GeolangMain;
/**
 * Exports the Geolang Tokens for use by Monaco
 */
function GetTokensProvider() {
    let tokenProvider = new GeolangTokensProvider_1.GeolangTokensProvider();
    return tokenProvider;
}
exports.GetTokensProvider = GetTokensProvider;
//# sourceMappingURL=GeolangMain.js.map