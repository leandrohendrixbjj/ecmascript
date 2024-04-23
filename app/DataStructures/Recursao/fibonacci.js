console.clear()
// Fibonnace é a soma do item antual mais o anterior, exemplo 0,1,2,3,5,8.....
/* 
   Numbers - Fibonnace
     0          0
     1          1
     2          1
     3          2
     4          3
     5          5
     6          8
     7          13
     8          21
     9          34
*/
function fibo(num) {
  if (num <= 1) return num
  const stack = fibo(num - 1) + fibo(num - 2)
  return stack
}

const data = fibo(5)
console.log(data)