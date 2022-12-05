console.clear();
// Agrupando objetos por uma propriedade
let pessoas = [
    { nome: "leandro", uf: "SP" },
    { nome: "Soares", uf: "RJ" },
    { nome: "Ribeiro", uf: "SP" },
];

function groupBy(pessoas, atributo) {
    return pessoas.reduce((acc, pessoa) => {
        let key = pessoa[atributo];

        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(pessoa);

        return acc;
    }, {})
}

let group = groupBy(pessoas, "uf");
console.log(group);