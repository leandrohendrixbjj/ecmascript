console.clear();
const arr = [];

function fator(num) {
  if (num < 1) return 1;

  arr.push(num)
  return num * fator(num - 1);
}

console.log(
  `Result: ${fator(5)}`
);

console.log(
  arr
);
