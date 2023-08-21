// Const is immutable
console.clear()

try {
    const name = 'leandro'
    name = 'soares'
} catch (error) {
    console.log("Não é possível alterar o valor de uma cost");
}
