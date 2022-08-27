const pessoas = [
    {nome:'leandro', idade:1},
    {nome:'soares', idade:2},
    {nome:'ribeiro', idade:3},
 ];
 
 const sum = pessoas.reduce((vlAnterior, proxValor) => vlAnterior + proxValor.idade, 0);
 
 console.log('Soma', sum);
 
 