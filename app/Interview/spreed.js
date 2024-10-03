/*
  Spreed => Passa vários valores em um só parâmetro
*/

console.clear()

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0)
}

console.log(sum(1, 2, 3))
