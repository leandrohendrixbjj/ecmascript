console.clear();

// E possível passar dados para uma função, através de um arr
// Você pode usar arguments para passar todos os argumentos para o objeto da chamada. 
// O objeto chamado fica então responsável por manipular os argumentos.

function count() {
    let tot = 0;
    for (let row = 0; row < arguments.length; row++) {
        tot += arguments[row];
    }
    console.log(tot);
}

count.apply(null, [1, 2, 3]); //6




