// Agrupar valores de um array
console.clear();

const users = [
    { nome: "Karina", sexo: "F", uf: "BA" },
    { nome: "Leandro", sexo: "M", uf: "SP" },
    { nome: "Ellen", sexo: "F", uf: "SP" },
];

function groupBy(key) {
    const data = users.reduce((accumulate, user) => {

        if (!accumulate[user[key]])
            accumulate[user[key]] = [];

        accumulate[user[key]].push(user);

        return accumulate;
    }, {});
    return data;
}

console.log(groupBy('uf'));