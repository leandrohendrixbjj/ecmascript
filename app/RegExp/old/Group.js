let catSrt = 'cat';
let regExp = /[a-e]at/g;

let batSrt = 'bat';
let matSrt = 'mat';

console.log(
    'Cat =>', catSrt.match(regExp),
    'Bat =>', batSrt.match(regExp),
    'Mat =>', matSrt.match(regExp),
);