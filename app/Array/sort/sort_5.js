//Ordenar objeto por nome ou id
const arr = [
   [3,'Ana'],
   [2,'Bruna'], 
   [1,'Cassia']
 ];

 const orderBy = {'id':0,'nome':1};
 
 function asc(a,b){
     let indexArr = orderBy.nome;
      
     if (a[indexArr] > b[indexArr]) return 1;
     if (a[indexArr] < b[indexArr]) return -1;
 
     return 0;
 }
 
 for (let row in arr){
    arr.sort(asc);    
 }
 
 console.log(arr);