console.clear();
// Os arguments dentro de uma função são um exemplo de 'objeto array-like'.
function list() {
    return Array.prototype.slice.call(arguments)
}

const data = list(1, 2);

console.log(data);