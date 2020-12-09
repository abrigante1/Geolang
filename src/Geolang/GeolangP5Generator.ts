import { SketchNode, StatementNode, ImportNode, ValueNode, ExpressionNode, BinaryExpressionNode, ValueExpressionNode, IndexExpressionNode, LogNode, SymbolDeclarationNode, SymbolDefinitionNode, RuleExpressionNode, ExpressionSequenceNode } from "./GeolangAST";
import { IndexExpressionContext } from "./GeolangParser";

/**
 * Maintains a Stateful P5 Instance Script.
 * Exposes functions that allow you to append to the key P5 functions 
 * sequentially and compose a dynamic p5 instance script, and then
 * export it as a string.
 */
export class P5Instance {

    globals  : String;
    preload : String;
    setup    : String;
    draw     : String;

    constructor() {
        this.globals  = "";
        this.preload = "";
        this.setup    = "";
        this.draw     = "";
    }

    appendGlobals(code : string) {
        this.globals += "\t" + code + "\n";
    }

    appendPreload(code : string) {
        this.preload += "\t\t" + code + "\n";
    }

    appendSetup(code : string) {
        this.setup += "\t\t" + code + "\n";
    }

    appendDraw(code : string) {
        this.draw += "\t" + code + "\n";
    }

    formatScript() : string {
        let instance = "";

            instance += "let sketch = ( p ) => {\n"

            instance += "\n" + this.globals + "\n";

            instance += "\tp.preload = function() {\n" + 
                            this.preload + 
                        "\t};\n\n";

            instance += "\tp.setup = function() {\n" + 
                            "\t\tlet canvas = p.createCanvas(600, 400);\n" +
                            this.setup + 
                        "\t};\n\n";

            instance += "\tp.draw = function() {\n" + 
                            "\tp.background(225, 225, 225)\n" + // Needed to Clear Screen
                            this.draw + 
                        "\t};\n\n";

        instance += "};\n\n"
        
        instance += "let pInstance = new p5(sketch, \"OutputWindow\");\n"

        return instance;
    }
}

/**
 * Geolang's P5 representation of a "Symbol".
 *  - Contains an id value and a properties object.
 *  - The properties object has subproperties generated and attached to it
 *    during parse-time.
 */
class Symbol {
    id : string;
    properties : Object = new Object();

    parseRuleCall(rule : RuleCall) {
       this.properties[rule.rule] = rule.parameters;
    }

    preprocess(p5 : P5Instance) {

        // ------------ GeoJSON ------------ //

        // Check if the Model is a GeoJSON Object
        let model = this.properties["Model"]
        if(model === undefined) {
            return;
        }
        model = `${model}`;

        // Generate the GeoJSON Property
        if(!(model[0] == "\"" && model[model.length - 1] == "\"")) {
            this.properties["isGeoJSON"] = true;

            // Appropriately Generate the Normalization Property
            if(Array.isArray(this.properties["Model"]) && this.properties["Model"].length > 1) {
                this.properties["Model"] = this.properties["Model"][0]; 
                this.properties["normalizeModel"] = true;
            } else {
                this.properties["normalizeModel"] = false;
            }
        }

        // ------------ SYMBOL DEFINITION ------------ //
        
        // Declare as Empty Object in Global Space
        p5.appendGlobals(`let ${this.id};`);

        // Assign Object in the Preload Call
        let symbolDef = `${this.id} = {\n`;
        for(const [key, value] of Object.entries(this.properties)) {
            let valStr = `${value}`;

            // Properly Generate Arrays
            if(Array.isArray(value)) {
                if(value.length > 1) {
                    valStr = `[${value}]`;
                }
            }

            // Use Single-Quotes to Maintain Formatting
            if(key == "Model") {
                valStr = `\`${value}\``;
            }

            symbolDef += `\t\t\t${key}: ${valStr},\n`;
        }
        symbolDef += "\t\t};\n";

        p5.appendSetup(symbolDef);

        // Generate the GeoJSON Bounding Boxes. Done in Setup to ensure the
        // GeoJSON file was loaded.
        if(this.properties["isGeoJSON"] == true) {
            p5.appendSetup(`\t\t${this.id}["BoundingBox"] = GenerateGeoJSONBoundingBox(p, ${this.properties["Model"]}, ${this.properties["normalizeModel"]});\n`);
        }
       
    }

    toString(p5 : P5Instance) {
        this.preprocess(p5);

        // Draw the Symbol
        p5.appendDraw("p.push();");

        // -- Begin Conditional Guard
        if(this.properties["conditional"]) {
            p5.appendDraw(`if(${this.properties["conditional"]}) {\n`);
        }
        
        for(const [key, value] of Object.entries(this.properties)) {
            let code = "";

            switch(key) {
                case "Color":
                    code = `p.fill(p.color(${value}))`;
                break;
                case "Model":

                    // Handle Drawing GeoJSON Models
                    if(this.properties["isGeoJSON"] == true) {
                        code = `DrawGeoJSON(p, ${value}, ${this.properties["normalizeModel"]},`;

                        if(this.properties["Translate"]) {
                            code += `[${this.properties["Translate"]}]`;
                        }
    
                        if(this.properties["Scale"]) {
                            code += `, [${this.properties["Scale"]}]`;
                        } else {
                            code += `, []`;
                        }

                    // Handle Drawing P5 Primatives
                    } else {

                        let parsedValue = `${value}`;
                        parsedValue = parsedValue.replace(/['"]+/g, '');

                        code = `p.${parsedValue}(`;

                        if(this.properties["Translate"]) {
                            code += `${this.properties["Translate"]}`;
                        }
    
                        if(this.properties["Scale"]) {
                            code += `, ${this.properties["Scale"]}`;
                        }
                    }

                    code += ")";
                break;
            }
            p5.appendDraw(`\t${code}`);
        }

        // -- End Conditional Guard
        if(this.properties["conditional"]) {
            p5.appendDraw(`}\n`);
        }

        p5.appendDraw("p.pop();\n");
    }
}

/**
 * A Class Object Representing a Rule Call and Its Parameters as a String.
 */
class RuleCall {
    rule : string;
    parameters : Array<string> = new Array<string>();

    toString() : string {
        let str = this.rule + "(";

        if(this.parameters.length > 0) {
            for(let i = 0; i < this.parameters.length - 1; ++i) {
                str += `${this.parameters[i]},`; 
            }

            let index = this.parameters.length - 1;
            if(index < 0) {
                index = 0;
            }

            str += this.parameters[index]
        }
        
        str +=")";

        return str;
    }
}

/**
 * Visits a Root Sketch Node of a Geolang AST and Generates the appropriate
 * P5 transpilation.
 */
export class GeolangP5Generator {

    p5instance : P5Instance = new P5Instance();
    symbolMap  : Map<string, Symbol> = new Map();

    protected defaultResult(): void {
        return;
    }

    constructor() {
    }

    visitSketchNode(ctx : SketchNode) {
        //console.log("--Visit Sketch Node--")

        for(let statement of ctx.statements) {
            if(statement instanceof ImportNode) {
                this.visitImportNode(statement);
            } else if(statement instanceof LogNode) {
                this.visitLogNode(statement);
            } else if(statement instanceof SymbolDeclarationNode) {
                this.visitSymbolDeclaration(statement);
            } else if(statement instanceof ExpressionNode) {
                this.visitExpressionNode(statement);
            }
        }

    }

    // Statement

    visitImportNode(ctx: ImportNode) {
        //console.log("--Visit Import Node--");
        let path : string = ctx.path.replace(/['"]+/g, '');
        let symbol : string = ctx.symbol;

        let symbolObject : Symbol = new Symbol();
        symbolObject.id = symbol;
        symbolObject.properties["importStorage"] = ctx.storage;
        symbolObject.properties["importPath"] = path;
        this.symbolMap.set(symbol, symbolObject);

        this.p5instance.appendGlobals(`let ${symbol};`);

        switch(ctx.storage)
        {
            case "csv":
                this.p5instance.appendPreload(`${symbol} = p.loadTable(\"${path}\", "csv", "header");`);
                this.p5instance.appendSetup(`${symbol} = ${symbol}.getObject();`);
                break;
            case "json":
                this.p5instance.appendPreload(`${symbol} = p.loadJSON(\"${path}\");`);
                break;
            case "geojson":
                this.p5instance.appendPreload(`${symbol} = p.loadJSON(\"${path}\");`);
                break;
        }
    }

    visitLogNode(ctx: LogNode) {
        this.p5instance.appendSetup(`//console.log(${this.visitExpressionNode(ctx.expression)});`);
    }

    // Declarations 
    visitSymbolDeclaration(ctx: SymbolDeclarationNode) {
        //console.log(ctx);
        
        let symbol : Symbol = new Symbol();

        symbol.id = ctx.identifier;
        let expr = this.visitExpressionNode(ctx.expression);
        if(expr !== undefined) {
            symbol.properties["conditional"] = expr;
        }
        
        for(let rule of ctx.definition.definition) {
            let ruleCall = this.visitRuleExpression(rule);
            symbol.parseRuleCall(ruleCall);
        }
        
        //console.log(symbol);
        symbol.toString(this.p5instance);
        this.symbolMap.set(symbol.id, symbol);
    }

    // Expressions

    visitExpressionNode(ctx : ExpressionNode) {
        //console.log("--Visit Expression Node--");
        if(ctx instanceof BinaryExpressionNode) {
            return this.visitBinaryExpressionNode(ctx);
        } else if (ctx instanceof ExpressionSequenceNode) {
            return this.visitExpressionSequence(ctx);
        } else if (ctx instanceof ValueExpressionNode) {
            return this.visitValueExpressionNode(ctx);
        } else if (ctx instanceof RuleExpressionNode) {
            return this.visitRuleExpression(ctx).toString();
        }
    }

    visitBinaryExpressionNode(ctx : BinaryExpressionNode) : string {
        let lvalue = this.visitExpressionNode(ctx.lvalue);
        let operator = "";
        if(ctx.operator) {
            operator = ctx.operator;
        }
        let rvalue = this.visitExpressionNode(ctx.rvalue);

        // Index Operations.
        if(ctx instanceof IndexExpressionNode) {
                rvalue = `[${rvalue}]`;
        }

        return  `${lvalue}${operator}${rvalue}`;
    }

    visitExpressionSequence(ctx : ExpressionSequenceNode) {
        let params = ctx.sequence;
        let seq : Array<string> = new Array<string>();
        if(params) {
            for(let i = 0; i < params.length; ++i) {
                seq.push(this.visitExpressionNode(params[i]) as string);
            }
        }
        return seq;
    }

    visitValueExpressionNode(ctx : ValueExpressionNode) {
        return ctx.value;
    }

    visitRuleExpression(ctx : RuleExpressionNode) : RuleCall {
        let ruleCall : RuleCall = new RuleCall();
        ruleCall.rule = ctx.identifier;


        let params = ctx.parameters;
        if(params) {
            let params = ctx.parameters.sequence;
            for(let i = 0; i < params.length; ++i) {
                ruleCall.parameters.push(this.visitExpressionNode(params[i]) as string);
            }
        }

        return ruleCall;
    }

}
