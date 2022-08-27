const arr = ['leandro','leandro','soares'];

const names = arr.filter((value,index,nome) => {
    return nome.indexOf(value) == index;
});

console.log(names);