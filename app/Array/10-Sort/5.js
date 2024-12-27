// Ordenar CONSIDERANDO APENAS OS NÚMEROS em um array de numeros e letras
console.clear()
let values = [];

const numbers = true

const regexp = (numbers) => {
  if (numbers) return /\d{1,2}/g; // d => Numbers
  if (!numbers) return /[\D]/g; // D => letters
}

values.push('d10');
values.push('c1');
values.push('2b');
values.push('1a');

// for (let row in values) {
//   console.log(values[row].match(regexp(numbers)));
// }

values.sort((a, b) => {
  if (numbers) {
    if (Number(a.match(regexp(true))) > Number(b.match(regexp(true)))) return 1
    if (Number(a.match(regexp(true))) < Number(b.match(regexp(true)))) return -1
  } else {
    if (a.match(regexp(false)) > b.match(regexp(false))) return 1
    if (a.match(regexp(false)) < b.match(regexp(false))) return -1
  }
  return 0
})

console.log(values);

