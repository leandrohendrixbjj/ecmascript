console.clear()

// Cria um arquivo de 1 milhão de linhas(1e6) para que seja possível
// executar os exemplos. Gera um arquivo com cerca de 400 MB.
const fs = require('fs')
const file = fs.createWriteStream('./big.file')

for (let row = 0; row <= 1e6; row++) {
  file.write(row + '=>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n')
}

file.end()

console.log('Finish')
