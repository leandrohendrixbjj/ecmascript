//Verifica se x e y tem o mesmo valor dentro da mesma linha
//Retorna as vezes que isso se repetiu no objeto
const objects = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 },
];

const count = objects.filter((value, index, arr) => {
    return value.x == value.y;
});

console.log(count.length);