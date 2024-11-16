console.clear()

// Spreed => Passa vários valores em um só parâmetro
const sum = (...data) => {
  return data.reduce((a, b) => a + b)
}

console.log(sum(1, 2, 3))
