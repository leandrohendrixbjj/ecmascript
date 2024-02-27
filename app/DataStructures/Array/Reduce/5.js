// Agrupando objetos por uma propriedade
console.clear();

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

let data = groupBy(pessoas, "uf");
console.log(data);