console.clear()

/*
  Acumulador => Inicia com o valorInicial e será retornado na última iteração
  Element => Valor dentro do array
  Index => Index do valor dentro do array
  Arr => o array com valores

  ultimoValorDaInteracao: Caso nenhum valor seja fornecido:
    Acumulador: recebe o primeiro valor do array 
    Element: recebe o segundo valor do array ( demais segue order do array )  
    O reduce pode retornar um array, string, integer..
*/

const arr = [1, 2, 3, 4]
const ultimoValorDaInteracao = 0

const sum = arr.reduce((acumulador, element, index, arr) => {
  console.log(
        `Acumulador: ${acumulador} Element: ${element} 
         Index: ${index} arr: ${arr} valorInicial: ${valorInicial} \n`)
}, ultimoValorDaInteracao)

console.log(`Sum: ${sum}`)
