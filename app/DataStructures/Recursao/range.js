console.clear()

function range(start, end) {

  if (start > end) return []

  const stack = range(start, end - 1)
  stack.push(end)
  return stack
}

console.log(
  range(1, 3)
)