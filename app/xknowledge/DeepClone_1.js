console.clear();

// Deep Clone, que realiza uma cópia da estrutura alvo e todas as suas propriedades internas 
// para novos endereços de memória.

const cloneArray = (element) => {
    if (typeCheck(element) !== 'array') return element
    return element.map(cloneArray)
}

// Valida o tipo de dados. TypeOf não diferencia null de {}. Função abaixo consegue valida.
const typeCheck = (type) => {
    const typeString = Reflect.apply(Object.prototype.toString, type, [])
    return typeString.slice(
        typeString.indexOf(' ') + 1,
        typeString.indexOf(']')
    ).toLowerCase()
}

const numbers = [1, 2]
const numbersCopy = numbers

console.log(numbers == numbersCopy);
console.log(numbers == cloneArray(numbers));

