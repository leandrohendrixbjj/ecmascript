console.clear();
// Add um novo atributo no objeto e remove o anteior

const people = [
    { id: 1, name: 'leandro', idade: 30 },
    { id: 2, name: 'soares', idade: 40 },
].map((element, index, arr) => {

    element = { ...element, age: element['idade'] } //Add age at End
    //element = { age: element['idade'], ...element } Add age at Begin
    delete element['idade']
    return element
});

console.log(people);
