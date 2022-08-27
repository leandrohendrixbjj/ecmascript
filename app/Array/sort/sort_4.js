//Ordena os grupos de valoes de um objeto
const arr = [
   {x:1,y:2},
   {x:3,y:4},
   {x:5,y:6},
];

function desc(a,b){    
   if (a.x > b.y) return -1;
   if (a.y < b.y) return 1;

   return 0;
}

function asc(a,b){    
    if (a.x > b.y) return 1;
    if (a.y < b.y) return -1;
 
    return 0;
 }

console.log('DESC', arr.sort(desc));
console.log('ASC', arr.sort(asc));