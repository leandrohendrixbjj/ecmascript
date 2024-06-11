console.clear()

// Caminho Simples para leitura de um arquivo
// Lê todo conteúdo do arquivo em memória
// Arquivos grandes vão causar GRANDE CONSUMO DE MEMÓRIA

const fs = require('fs')

fs.readFile('../names.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
