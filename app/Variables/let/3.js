// Neste caso o result dentro do bloco não possui let, então será considerada
// a declaração fora do escopo.
console.clear()

let result;
for (let row = 0; row < 3; row++) {
  if (row === 2) {
    result = row;
  }
}

console.log(`Result:${result}`);

