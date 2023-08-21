// JsonParse => Exemplos
console.clear()

JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null

try {
    JSON.parse("[1, 2, 3, 4, ]");
    JSON.parse('{"foo" : 1, }');
} catch (error) {
    console.log("não permite vírgulas à direta");
}