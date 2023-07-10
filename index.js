console.clear();
// Add um novo atributo no objeto e remove o anteior

const people = [
    { id: 1, name: 'leandro', idade: 30 },
    { id: 2, name: 'soares', idade: 40 },
].map((element, index, arr) => {

    element = { age: element['idade'], ...element } //Add age at begin
    delete element['idade']
    return element
});

console.log(people);
