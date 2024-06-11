console.clear()

// Versão sincrona para leitura de um arquivo
// Lê todo conteúdo do arquivo em memória antes de retornar os dados.
// Arquivos grandes vão causar GRANDE CONSUMO DE MEMÓRIA

const fs = require('node:fs')

try {
  const data = fs.readFileSync('../names.txt', 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}
