console.clear();

/*
   Element => Valor dentro do array
   Index => Index do valor dentro do array
   Arr => o array com valores
 */

[12, 13, 14].filter((value, index, arr) => {
  console.log(
        `Value: ${value} Index: ${index} arr: ${arr}`)
})
