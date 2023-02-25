console.clear();
// Busca nomes usando RegRexp
const names = ['Ana', 'Lucia', 'Carla', 'Ellen', 'Amanda'];
const filtro = 'A';

let regExp = new RegExp(filtro.trim(), 'i');

for (let row in names) {

    if (regExp.test(names[row])) {
        console.log(names[row])
    }
}