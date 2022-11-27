console.clear();
// Cria um novo array com todos os elementos que passaram 
//no teste implementado pela função fornecida.
let filter = ['Leandro', 'Soares', 'Ribeiro'].filter((name) => {
    return name == 'Leandro' || name == 'Soares';
});

console.log(filter);