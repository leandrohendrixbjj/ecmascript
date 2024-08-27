console.clear()

// Abre para escrita e posiciona o cursor no FIM do arquivo ( Arquivo não será sobrescrito )
// Com TRY AND CATCH

const fs = require('node:fs/promises')

async function writeIFile () {
  try {
    const content = 'Some content!'
    await fs.appendFile('/Users/joe/test.txt', content)
  } catch (err) {
    console.log('file written successfully')
  }
}

writeIFile()
