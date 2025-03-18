console.clear()

const data = {
    person: { name: 'leandro' }
}

// Neste caso um objeto dentro de outro o ( Freeze é Raso )
Object.freeze(data)
data.person.name = 'Soares'
console.log(data);