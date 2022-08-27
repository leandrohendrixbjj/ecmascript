const motos = {
    marca: "Suzuki",
    "600 cilindradas": "sv",
    3: "R$ 20.000",
    fornecedor: "J toledo",
    opcoes: ['Vstrong', 'Bandit', 'Intruder'],
    seguro: true    
}

console.log('Marca', motos.marca);

//Colchetes pq attributo tem espaço
console.log('Colindradas', motos["600 cilindradas"]);

console.log('Valor', motos[3]);

console.log('Fornecedor: ', motos.fornecedor);

motos.opcoes.forEach( (op) => {
    console.log('Opção', op);
});