console.clear();

// Gera uma nova copia, com novo endereço de memória

const arr = ['Honda', 'Suzuki', 'Royal Enfield']
const motos = [...arr]

console.log(arr == motos);