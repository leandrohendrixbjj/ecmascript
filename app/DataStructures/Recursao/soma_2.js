console.clear()

function sum(arr, index) {
    if (index <= 0) return 0

    // Nesse trecho vamos obter o valor
    // da posição do array
    // 1- stack = [20]
    // 2- stack = [20,10]
    let stack = sum(arr, index - 1)

    // Neste ponto executamos a soma
    // R: 30
    stack += arr[index - 1]

    return stack

}
const data = sum([10, 20, 40], 2)
console.log(data);