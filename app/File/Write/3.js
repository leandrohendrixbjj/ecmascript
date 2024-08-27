console.clear()

// Forma mais simples de escrever em um Arquivo ( COM PROMISES )
// Toda vez que executado, o arquivo é sobrescrito

const fs = require('node:fs/promises')

async function writeInFile () {
  try {
    const content = 'Some content!'
    await fs.writeFile('../names.txt', content)
  } catch (err) {
    console.log(err)
  }
}

writeInFile()
  .then(success => console.log('File written successfully'))
  .catch(error => console.log(`Error:${error}`))
