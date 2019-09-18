const Parser = require('tree-sitter');
const Lux = require('tree-sitter-lux');
const fs = require('fs');

const parser = new Parser();
parser.setLanguage(Lux);

const sourceCode = fs.readFileSync("example.lux", "utf-8");
const tree = parser.parse(sourceCode);

console.log(tree.rootNode.toString());
