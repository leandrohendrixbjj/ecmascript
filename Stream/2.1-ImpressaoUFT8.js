// Digite o terminal: Impressão padrão utf8

console.clear()

process.stdin.setEncoding('utf-8')
process.stdin.on('data', row => console.log(row))
