console.clear();
// A passagem por valor, estamos passando uma CÓPIA do items para a função.
// Essa cópia possui um endereço de memória novo.

let items = 1;

function getItem(items) {
    items += 1
    console.log(`Dentro da função: ${items}`) //2
}

getItem(items)
console.log(`Fora da função: ${items}`); //1

