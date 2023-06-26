console.clear();

//BigInt tem uma precisão grande com numeros grandes.
//Importante informar o "n" no final onde indica ao JS que vamos trabalhar com
//BigInt

let x = 8866128975287528n;
let y = -8778405442862239n;
let z = -2736111468807040n;

console.log(x * x * x + y * y * y + z * z * z);