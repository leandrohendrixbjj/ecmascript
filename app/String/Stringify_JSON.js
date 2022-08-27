var nomes = ['leandro', 'Soares'];
console.log(typeof JSON.stringify(nomes));
console.log(typeof nomes);

var person = {
    name: 'Leandro',
    age: 37
}

console.log('type', typeof(person));
let pessoa = JSON.stringify(person);
console.log('novo_tipo', typeof(pessoa));

