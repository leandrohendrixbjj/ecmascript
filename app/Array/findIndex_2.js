//Procura por valor um atributo no objeto
const nomes = [
    {id:'1',nome:'leandro'},
    {id:'2',nome:'soares'},
    {id:'3',nome:'ribeiro'}
];

const index = nomes.findIndex(nomes => nomes.id == 3);

console.log(
    nomes[index]
);