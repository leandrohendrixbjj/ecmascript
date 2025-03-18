// O método Object.freeze() congela um objeto: isto é, impede que novas propriedades 
// sejam adicionadas a ele; impede que as propriedades existentes sejam removidas; 
// e impede que propriedades existentes, ou sua inumerabilidade, configurabilidade, 
// ou capacidade de escrita sejam alteradas. Em essência o objeto é efetivamente 
// imutável. O método retorna o objeto congelado.

console.clear()

const person = {
    name: "leandro",
    age: 30
}

try {
    Object.freeze(person)
    person.name = 'Soares'
    delete person.age
    Object.assign(person, { adress: "Rua A", num: 22 })
} catch (error) {
    console.log(error)
}
console.log(person)
