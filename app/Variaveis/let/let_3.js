//Valor será 2. O let respeita o escopo local
let result;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    result = () => {return i;};      
  }
}

console.log('Result', result());