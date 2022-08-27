// Check if all values in ages[] are over 16:

const ages = [18,20,30];

function ageTarget(age){
  return age > 16;
}

console.log('Result: ',ages.every(ageTarget));