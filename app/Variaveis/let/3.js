//When let is declared outside of a block, its value can not be assign
console.clear()

let result;
for (let row = 0; row < 3; row++) {
  if (row === 2)
    result = row;
}

console.log(`Result:${result}`);