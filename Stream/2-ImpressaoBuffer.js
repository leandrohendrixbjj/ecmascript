// Digite o terminal: Impressão será do buffer do valor

console.clear()

console.log('Digite:')
process.stdin.on('data', row => console.log(row))
