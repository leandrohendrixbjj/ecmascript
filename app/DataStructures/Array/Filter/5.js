console.clear();
//Procurando em um array 
const arr = ['Apple', 'BANANA', 'grapes', 'mango', 'orange'];

const search = (query) => {
    return arr.filter((fruit) => {
        return fruit.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) > -1
    })
}

console.log(search('ap'));
console.log(search('an'));
console.log(search('zw'));
