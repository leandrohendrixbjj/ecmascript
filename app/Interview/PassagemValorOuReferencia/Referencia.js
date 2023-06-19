console.clear();
// A passagem por referência, estamos passando o endereço de memória
// do items para a função. 

let items = { value: 1 };

function getItem(items) {
    items.value += 1
    console.log(`Dentro da função: ${items.value}`) //2
}

getItem(items)
console.log(`Fora da função: ${items.value}`); //1

