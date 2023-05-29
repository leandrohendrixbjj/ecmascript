console.clear();

// Remove elemento conforme a posição informada

const arr = ['Honda', 'Suzuki', 'Royal Enfield']
const arrPosition = arr.indexOf('Suzuki');
const action = 0; // 0 = add, 1 = Remove

arr.splice(arrPosition, action, 'Yamaha')
// [ 'Honda', 'Yamaha', 'Suzuki', 'Royal Enfield' ]








