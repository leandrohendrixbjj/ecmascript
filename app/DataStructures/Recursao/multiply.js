var sum = [];

function multiply(n1,n2){

   if (n1 == 0 || n2 == 0){ return 0;}

   if (n2 == 1){ return n1;}
   
   sum.push(n1 + n1,n2 -1);
   return n1 + (multiply(n1,n2 -1));
}

console.log(multiply(5,4));
console.log(sum);