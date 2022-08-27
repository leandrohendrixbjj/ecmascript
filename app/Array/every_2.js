// Check if all values in ages[] are over 18:

const ages = [2,18,32,50];

const fnAge = (age) => age >= 18;

console.log(ages.every(fnAge));