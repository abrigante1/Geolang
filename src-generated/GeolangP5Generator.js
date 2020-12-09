"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GeolangAST_1 = require("./GeolangAST");
/**
 * Maintains a Stateful P5 Instance Script.
 * Exposes functions that allow you to append to the key P5 functions
 * sequentially and compose a dynamic p5 instance script, and then
 * export it as a string.
 */
class P5Instance {
    constructor() {
        this.globals = "";
        this.preload = "";
        this.setup = "";
        this.draw = "";
    }
    appendGlobals(code) {
        this.globals += "\t" + code + "\n";
    }
    appendPreload(code) {
        this.preload += "\t\t" + code + "\n";
    }
    appendSetup(code) {
        this.setup += "\t\t" + code + "\n";
    }
    appendDraw(code) {
        this.draw += "\t" + code + "\n";
    }
    formatScript() {
        let instance = "";
        instance += "let sketch = ( p ) => {\n";
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
        instance += "};\n\n";
        instance += "let pInstance = new p5(sketch, \"OutputWindow\");\n";
        return instance;
    }
}
exports.P5Instance = P5Instance;
/**
 * Geolang's P5 representation of a "Symbol".
 *  - Contains an id value and a properties object.
 *  - The properties object has subproperties generated and attached to it
 *    during parse-time.
 */
class Symbol {
    constructor() {
        this.properties = new Object();
    }
    parseRuleCall(rule) {
        this.properties[rule.rule] = rule.parameters;
    }
    preprocess(p5) {
        // ------------ GeoJSON ------------ //
        // Check if the Model is a GeoJSON Object
        let model = this.properties["Model"];
        if (model === undefined) {
            return;
        }
        model = `${model}`;
        // Generate the GeoJSON Property
        if (!(model[0] == "\"" && model[model.length - 1] == "\"")) {
            this.properties["isGeoJSON"] = true;
            // Appropriately Generate the Normalization Property
            if (Array.isArray(this.properties["Model"]) && this.properties["Model"].length > 1) {
                this.properties["Model"] = this.properties["Model"][0];
                this.properties["normalizeModel"] = true;
            }
            else {
                this.properties["normalizeModel"] = false;
            }
        }
        // ------------ SYMBOL DEFINITION ------------ //
        // Declare as Empty Object in Global Space
        p5.appendGlobals(`let ${this.id};`);
        // Assign Object in the Preload Call
        let symbolDef = `${this.id} = {\n`;
        for (const [key, value] of Object.entries(this.properties)) {
            let valStr = `${value}`;
            // Properly Generate Arrays
            if (Array.isArray(value)) {
                if (value.length > 1) {
                    valStr = `[${value}]`;
                }
            }
            // Use Single-Quotes to Maintain Formatting
            if (key == "Model") {
                valStr = `\`${value}\``;
            }
            symbolDef += `\t\t\t${key}: ${valStr},\n`;
        }
        symbolDef += "\t\t};\n";
        p5.appendSetup(symbolDef);
        // Generate the GeoJSON Bounding Boxes. Done in Setup to ensure the
        // GeoJSON file was loaded.
        if (this.properties["isGeoJSON"] == true) {
            p5.appendSetup(`\t\t${this.id}["BoundingBox"] = GenerateGeoJSONBoundingBox(p, ${this.properties["Model"]}, ${this.properties["normalizeModel"]});\n`);
        }
    }
    toString(p5) {
        this.preprocess(p5);
        // Draw the Symbol
        p5.appendDraw("p.push();");
        // -- Begin Conditional Guard
        if (this.properties["conditional"]) {
            p5.appendDraw(`if(${this.properties["conditional"]}) {\n`);
        }
        for (const [key, value] of Object.entries(this.properties)) {
            let code = "";
            switch (key) {
                case "Color":
                    code = `p.fill(p.color(${value}))`;
                    break;
                case "Model":
                    // Handle Drawing GeoJSON Models
                    if (this.properties["isGeoJSON"] == true) {
                        code = `DrawGeoJSON(p, ${value}, ${this.properties["normalizeModel"]},`;
                        if (this.properties["Translate"]) {
                            code += `[${this.properties["Translate"]}]`;
                        }
                        if (this.properties["Scale"]) {
                            code += `, [${this.properties["Scale"]}]`;
                        }
                        else {
                            code += `, []`;
                        }
                        // Handle Drawing P5 Primatives
                    }
                    else {
                        let parsedValue = `${value}`;
                        parsedValue = parsedValue.replace(/['"]+/g, '');
                        code = `p.${parsedValue}(`;
                        if (this.properties["Translate"]) {
                            code += `${this.properties["Translate"]}`;
                        }
                        if (this.properties["Scale"]) {
                            code += `, ${this.properties["Scale"]}`;
                        }
                    }
                    code += ")";
                    break;
            }
            p5.appendDraw(`\t${code}`);
        }
        // -- End Conditional Guard
        if (this.properties["conditional"]) {
            p5.appendDraw(`}\n`);
        }
        p5.appendDraw("p.pop();\n");
    }
}
/**
 * A Class Object Representing a Rule Call and Its Parameters as a String.
 */
class RuleCall {
    constructor() {
        this.parameters = new Array();
    }
    toString() {
        let str = this.rule + "(";
        if (this.parameters.length > 0) {
            for (let i = 0; i < this.parameters.length - 1; ++i) {
                str += `${this.parameters[i]},`;
            }
            let index = this.parameters.length - 1;
            if (index < 0) {
                index = 0;
            }
            str += this.parameters[index];
        }
        str += ")";
        return str;
    }
}
/**
 * Visits a Root Sketch Node of a Geolang AST and Generates the appropriate
 * P5 transpilation.
 */
class GeolangP5Generator {
    constructor() {
        this.p5instance = new P5Instance();
        this.symbolMap = new Map();
    }
    defaultResult() {
        return;
    }
    visitSketchNode(ctx) {
        //console.log("--Visit Sketch Node--")
        for (let statement of ctx.statements) {
            if (statement instanceof GeolangAST_1.ImportNode) {
                this.visitImportNode(statement);
            }
            else if (statement instanceof GeolangAST_1.LogNode) {
                this.visitLogNode(statement);
            }
            else if (statement instanceof GeolangAST_1.SymbolDeclarationNode) {
                this.visitSymbolDeclaration(statement);
            }
            else if (statement instanceof GeolangAST_1.ExpressionNode) {
                this.visitExpressionNode(statement);
            }
        }
    }
    // Statement
    visitImportNode(ctx) {
        //console.log("--Visit Import Node--");
        let path = ctx.path.replace(/['"]+/g, '');
        let symbol = ctx.symbol;
        let symbolObject = new Symbol();
        symbolObject.id = symbol;
        symbolObject.properties["importStorage"] = ctx.storage;
        symbolObject.properties["importPath"] = path;
        this.symbolMap.set(symbol, symbolObject);
        this.p5instance.appendGlobals(`let ${symbol};`);
        switch (ctx.storage) {
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
    visitLogNode(ctx) {
        this.p5instance.appendSetup(`//console.log(${this.visitExpressionNode(ctx.expression)});`);
    }
    // Declarations 
    visitSymbolDeclaration(ctx) {
        //console.log(ctx);
        let symbol = new Symbol();
        symbol.id = ctx.identifier;
        let expr = this.visitExpressionNode(ctx.expression);
        if (expr !== undefined) {
            symbol.properties["conditional"] = expr;
        }
        for (let rule of ctx.definition.definition) {
            let ruleCall = this.visitRuleExpression(rule);
            symbol.parseRuleCall(ruleCall);
        }
        //console.log(symbol);
        symbol.toString(this.p5instance);
        this.symbolMap.set(symbol.id, symbol);
    }
    // Expressions
    visitExpressionNode(ctx) {
        //console.log("--Visit Expression Node--");
        if (ctx instanceof GeolangAST_1.BinaryExpressionNode) {
            return this.visitBinaryExpressionNode(ctx);
        }
        else if (ctx instanceof GeolangAST_1.ExpressionSequenceNode) {
            return this.visitExpressionSequence(ctx);
        }
        else if (ctx instanceof GeolangAST_1.ValueExpressionNode) {
            return this.visitValueExpressionNode(ctx);
        }
        else if (ctx instanceof GeolangAST_1.RuleExpressionNode) {
            return this.visitRuleExpression(ctx).toString();
        }
    }
    visitBinaryExpressionNode(ctx) {
        let lvalue = this.visitExpressionNode(ctx.lvalue);
        let operator = "";
        if (ctx.operator) {
            operator = ctx.operator;
        }
        let rvalue = this.visitExpressionNode(ctx.rvalue);
        // Index Operations.
        if (ctx instanceof GeolangAST_1.IndexExpressionNode) {
            rvalue = `[${rvalue}]`;
        }
        return `${lvalue}${operator}${rvalue}`;
    }
    visitExpressionSequence(ctx) {
        let params = ctx.sequence;
        let seq = new Array();
        if (params) {
            for (let i = 0; i < params.length; ++i) {
                seq.push(this.visitExpressionNode(params[i]));
            }
        }
        return seq;
    }
    visitValueExpressionNode(ctx) {
        return ctx.value;
    }
    visitRuleExpression(ctx) {
        let ruleCall = new RuleCall();
        ruleCall.rule = ctx.identifier;
        let params = ctx.parameters;
        if (params) {
            let params = ctx.parameters.sequence;
            for (let i = 0; i < params.length; ++i) {
                ruleCall.parameters.push(this.visitExpressionNode(params[i]));
            }
        }
        return ruleCall;
    }
}
exports.GeolangP5Generator = GeolangP5Generator;
//# sourceMappingURL=GeolangP5Generator.js.map