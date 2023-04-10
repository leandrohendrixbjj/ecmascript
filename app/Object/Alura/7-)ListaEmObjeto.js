console.clear();

const pessoa = {
    name: "leandro",
    age: 20,
    dependentes: [{
        tipo: "F",
        nome: "Carla"
    }]
}

pessoa.dependentes.push({ tipo: "M", nome: 'Pedro' })
pessoa.dependentes.push({ tipo: "F", nome: 'Sandra' })

console.log(
    pessoa.dependentes.filter(item => item.tipo == "F")
);

