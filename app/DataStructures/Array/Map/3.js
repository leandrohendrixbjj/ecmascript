console.clear();
//Using map to reformat objects in an array
const obj = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }
];

const toArray = obj.map(({ key, value }) => {
    return ({ [key]: value });
});

console.log(toArray);