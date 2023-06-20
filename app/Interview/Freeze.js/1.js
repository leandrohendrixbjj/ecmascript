//.freeze() congela um objeto: 
// 1- impede que novas propriedades sejam adicionadas
// 2- impede que as propriedades existentes sejam removidas 
// 3- impede que propriedades existentes, ou sua inumerabilidade, configurabilidade, 
// ou capacidade de escrita sejam alteradas. 
// Em essência o objeto é efetivamente imutável. O método retorna o objeto congelado.
console.clear()
const person = {
    name: 'leandro',
    age: 30
}
Object.freeze(person)

// Informa se objeto está congelado
console.log("Eh um objeto congelado:", Object.isFrozen(person))

// Tenta alterar objeto
person.adress = 'Rua A'
person.name = 'Soares'
delete person.age

console.log(person);