//g->minusculo
//ig->maiusculo e minusculo
let nome = "LEANDRO, leandro, little star";
let regexp = /leandro/ig; 
let result = nome.match(regexp); 

console.log(result);