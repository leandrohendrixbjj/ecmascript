console.clear();

// Add um novo elemento no array

const arr = ['Honda', 'Suzuki', 'Royal Enfield']
const arrPosition = arr.indexOf('Suzuki');
const action = 0; // 0 = add
const value = 'Yamaha'

arr.splice(arrPosition, action, value) // [ 'Honda', 'Yamaha', 'Suzuki', 'Royal' ]








