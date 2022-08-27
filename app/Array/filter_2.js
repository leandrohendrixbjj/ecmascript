// Remove os itens duplicados
const nomes = ['leandro', 'soares', 'ribeiro', 'leandro'];

const names = nomes.filter(function(valor, index, nomes){
     return nomes.indexOf(valor) == index;
});

console.log(names);