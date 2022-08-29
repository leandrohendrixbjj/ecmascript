// Splice => Emenda;
// Allow to complet values un a Array
// Return values at the same array

const letters = ['a','c','d'];

const addAtPosition = 1; //IndexOfArray
const action = 0; // Add = 0; Del = 1
const value = 'b';

letters.splice(addAtPosition,action,value);

console.log(letters);