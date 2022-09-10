// The join() method creates and returns a new string by concatenating all of 
//the elements in an array  separated by commas or a specified separator string. 

const names = ['leandro','soares','ribeiro'];

let arr = names.join('');
console.log(`${typeof arr}: ${arr}`); //leandrosoaresribeiro

arr = names.join();
console.log(`${typeof arr}: ${arr}`); //leandro,soares,ribeiro

arr = names.join('-');
console.log(`${typeof arr}: ${arr}`); //leandro-soares-ribeiro

