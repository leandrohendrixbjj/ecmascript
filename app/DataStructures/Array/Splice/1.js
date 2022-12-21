console.clear();

// Splice => Emendar => altera o conteúdo de uma lista, 
// add novos elementos enquanto remove elementos antigos.

const months = ['Jan', 'March', 'April', 'June'];

const index = 1;
const deleteCount = 0;
const element = 'Feb';

months.splice(index, deleteCount, element);

console.log(months);