console.clear();
// Filtrando entradas inválidas para JSON
var errors = 0;
const obj = [
    { id: 1 },
    { id: "leandro" },
    { id: null },
    { id: NaN },
    {},
    { id: 10 },
];

function check(obj) {
    if ('id' in obj && typeof (obj.id) == 'number' && !isNaN(obj.id))
        return true;
    errors++;
}

const filter = obj.filter(check);

console.log(filter);
console.log(`Erros:${errors}`);
