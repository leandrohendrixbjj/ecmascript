console.clear()

// Versão sincrona para leitura de um arquivo
// Lê todo conteúdo do arquivo em memória antes de retornar os dados.
// Arquivos grandes vão causar GRANDE CONSUMO DE MEMÓRIA

const fs = require('node:fs/promises')

async function readFileNames () {
  try {
    return await fs.readFile('../names.txt', { encoding: 'utf8' })
  } catch (err) {
    console.log(err)
  }
}

readFileNames()
  .then(data => console.log(data))
  .catch(err => console.error(err))
