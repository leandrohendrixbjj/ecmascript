console.clear();

const moto1 = {
    name: "Vstorm",
    brand: "Suzuki"
}
// moto1 serviu de referência para moto2. Se alteramos qualquer um dos objetos
// Essa alteração e aplicada em ambas. 
// Acessa os valores deles fazendo referência ao original. mas não cria uma cópia
const moto2 = moto1;
moto1.brand = 'Honda';

console.log(moto1);
console.log(moto2);