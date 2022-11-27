console.clear();
// Retorna um único valor de retorno.
const arr = [10, 2];
const valorInicial = 0;

// Acumulador => Inicia com o valorInicial e será retornado na última iteração
// ValorInicial => Elemento atual que está sendo processado no array
// Index => index of the current element
// Arr => the array map
//Obs:Se nenhum valorInicial é fornecido, o primeiro elemento do array será usado 
//como o valor inicial do acumulador e o valorAtual não será lido

const sum = arr.reduce((acumulador, valorInicial, index, arr) => {
    console.log(
        `Acumulador: ${acumulador} vlInicial: ${valorInicial} Index: ${index} arr: ${arr} `);
}, valorInicial);


