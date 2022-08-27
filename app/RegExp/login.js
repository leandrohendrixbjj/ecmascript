const nome = 'LEANDRO';
let regexp = /^[a-zA-z]+\d*$|^[a-z]\d\d+$/g;

console.log(nome.match(regexp));


/*
^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input 
*/
