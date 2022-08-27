const ages = [12,14,34,40];

function checkAges(age){
    return age > 18;
}

console.log(ages.some(checkAges));