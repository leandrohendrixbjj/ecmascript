console.clear();
// Filtrando entradas inválidas para JSON

let errors = 0;

const obj = [
  { id: 1 },
  { id: "leandro" },
  { id: null },
  { id: NaN },
  {},
  { id: 10 },
];

function validate(obj) {
  if ('id' in obj && typeof (obj.id) == 'number' 
                  && !isNaN(obj.id) 
                  || typeof (obj.id) == 'string'
  ) { return true }
  errors++;
}

const data = obj.filter(validate);

console.log(data);
console.log(`Erros:${errors}`);
