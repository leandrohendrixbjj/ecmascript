//Valor será 3. O var não respeita o escopo local
let result;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    result = () => {return i;};      
  }
}

console.log('Result', result());