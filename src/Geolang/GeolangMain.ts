import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import {GeolangASTBuilder} from "./GeolangASTBuilder";
import {GeolangLexer} from "./GeolangLexer"
import {GeolangParser} from './GeolangParser';
import { GeolangTokensProvider } from './GeolangTokensProvider';
import { P5Instance, GeolangP5Generator } from './GeolangP5Generator';


/**
 * Class the takes in an input string, parses it, and returns the
 * generated P5.
 * 
 * @param source input source code to parse and generate AST from
 * @returns Transpiled P5 String
 */
export function GeolangMain(source : string): string
{
    let inputStream = new ANTLRInputStream(source);
    let lexer = new GeolangLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new GeolangParser(tokenStream);

    let ctx = parser.compileUnit();

    let astBuilder = new GeolangASTBuilder();
    astBuilder.visitCompileUnit(ctx);
    console.log(astBuilder.root);

    //let astVisiter = new GeolangD3Generator();
    let astVisiter = new GeolangP5Generator();
    astVisiter.visitSketchNode(astBuilder.root);

    return astVisiter.p5instance.formatScript();

}

/**
 * Exports the Geolang Tokens for use by Monaco
 */
export function GetTokensProvider() : GeolangTokensProvider
{
    let tokenProvider = new GeolangTokensProvider();
    return tokenProvider;
}