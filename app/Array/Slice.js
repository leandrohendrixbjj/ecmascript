console.clear();

// Gera uma nova copia, com novo endereço de memória
const arr = ['Honda', 'Suzuki', 'Royal Enfield']
const motos = arr.slice();

console.log(arr == motos);