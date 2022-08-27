var lista = [10,1, 5, 9, 8, 12, 15];

function orderBY(a,b){
   if(a > b) return 1;

   if(a < b) return -1;

   return 0;
}

lista.sort(orderBY);

console.log(lista);