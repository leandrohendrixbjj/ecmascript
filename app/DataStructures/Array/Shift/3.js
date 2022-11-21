console.clear();
//  Method is often used in condition inside while loop.
const names = ['leandro', 'soares', 'ribeiro'];

while (typeof (nome = names.shift()) !== 'undefined') {
    console.log(nome);
}

console.log(`Arr: ${names}`);