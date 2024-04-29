console.clear()

function soma (num) {
  if (num === 1) return 1

  const stack = num += soma(num - 1)
  return stack
}

console.log(
  soma(5)
)
