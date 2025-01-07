console.clear()

// Os valores não são impressos na ordem correta

const data = [10, 1, 12, 5, 9]

function orderBy (a, b) {
  return (a > b) ? 1 : (a < b) ? -1 : 0
}

data.sort(orderBy)

console.log(data)
