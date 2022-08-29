// Splice => Emenda;
// Allow to complet values un a Array
// Return values at the same array
const letters = ['b','c','a'];

let action = 1; // Add = 0; Del = 1

letters.splice(2,action); //Remove a from letters

const position = 0;
const value = "a";
action = 0;

letters.splice(position,action,value);

console.log(letters);
