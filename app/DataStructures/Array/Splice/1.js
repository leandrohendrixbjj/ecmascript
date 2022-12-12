//O método slice() retorna uma cópia de parte de um array 
//O Array original não é modificado.

//slice = > fatiar

const arr = ['leandro', 'soares', 'ribeiro', 'karina'];

console.log(arr.slice(0)) //[ 'leandro', 'soares', 'ribeiro', 'karina' ]

console.log(arr.slice(0, 1)) //[ 'leandro']

console.log(arr.slice(0, 2)) //[ 'leandro', 'soares' ]

console.log(arr.slice(0, 20)) //NADA

console.log(arr.slice(1, 4)) //[ 'soares', 'ribeiro', 'karina' ]

console.log(arr.slice(-1)) //[ 'karina' ]

console.log(arr.slice(-2)) //[ 'ribeiro', 'karina' ]

console.log(arr.slice(-10)) //[ 'leandro', 'soares', 'ribeiro', 'karina' ]

console.log(arr.slice()) //[ 'leandro', 'soares', 'ribeiro', 'karina' ]