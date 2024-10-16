/*
  Digite o terminal
  Impressão será do buffer do valor
*/

console.clear()

process.stdin.on('data', row => console.log(row))
