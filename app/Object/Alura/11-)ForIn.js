console.clear();

const cliente = {
    nome: "Joao",
    idade: 24,
    enderecos: [{
        rua: "R. Joseph Climber",
        numero: 1337,
    }]
};


for (let chave in cliente) {
    if (typeof cliente[chave] !== 'object')
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
}