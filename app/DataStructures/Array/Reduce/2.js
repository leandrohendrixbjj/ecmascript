console.clear();

// Acumulador => Inicia com o valorInicial e será retornado na última iteração
// ValorInicial => Elemento atual que está sendo processado no array
// Index => index of the current element
// Arr => the array map

//Obs: Caso nenhum valorInicial seja fornecido, acumulador será igual ao primeiro valor 
//no array, e valorAtual será igual ao segundo.
//O reduce pode retornar um array, string, integer..

const arr = [10, 2];
const valorInicial = 0;

const sum = arr.reduce((acumulador, valorInicial, index, arr) => {
    console.log(
        `Acumulador: ${acumulador} vlInicial: ${valorInicial} Index: ${index} arr: ${arr} `);
}, valorInicial);


