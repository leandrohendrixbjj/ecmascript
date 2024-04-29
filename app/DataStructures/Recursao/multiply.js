console.clear()

function multiply(x, y) {

  if (x == 0 || y == 0) return 0
  if (y == 1) return x

  const stack = x + multiply(x, y - 1)
  return stack
}

console.log(multiply(2, 4))
//console.log(sum)