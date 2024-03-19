console.clear();

const arr = ["angel", "clown", "mandarin", "surgeon"];
const start = 4; // Indica de onde a alteração deve ser iniciada
const action = 0; // 0 => Add
const value = 'I am used do it' // Valor que será add não obrigatório

arr.splice(start, action, 'I am used do it');

console.log(arr);