const person = {
    nome: 'Leandro',
    idade: 37,
    empresa: 'movida'
}

function takeAttribute(name){
    if(person.hasOwnProperty(name)){
        return person[name];
    }
    return 'not found';
}

console.log(takeAttribute('nome'));
console.log(takeAttribute('company'));


