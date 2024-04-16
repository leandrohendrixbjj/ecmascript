console.clear()
// Informe o valor e vai obter a sequencia de Fibonacci

//Values          1  ,2  ,3,  4  ,5 , 6 , 7 , 8 , 9
//Sequence Fibo [ 1 , 2 , 3 , 5 , 8 , 13, 21, 34, 55]

function fibo(num){
  if (num == 1) return 1
  if (num == 2) return 2

  return fibo(num - 1) + fibo(num - 2)
}


console.log(
  fibo(6)
);
