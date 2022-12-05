console.clear();
//Contando valores iguais em um objeto
let sum = 0;
const arr = ['bruno', 'soares', 'leandro', 'leandro']
    .filter((element, index, arr) => {
        if (arr.indexOf(element) != index)
            sum++;
        return sum;
    });

console.log(arr.length + 1);

