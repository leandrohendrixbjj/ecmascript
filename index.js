// 1-) Principal diferença entre elas é a sintaxe
// 2-) Arrows precisam está associadas a uma variável

console.clear();

const sumArrow = (a, b) => a + b
console.log("Arrow", sumArrow(1, 2));

function sum(a, b) {
    return a + b
}
console.log("Function", sum(1, 2));



