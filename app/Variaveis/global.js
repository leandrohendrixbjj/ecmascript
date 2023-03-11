console.clear();
oopsGlobal = 12;

lessOne = () => { oopsGlobal--; 1 }
lessTwo = () => { oopsGlobal -= 2; }

lessOne();
lessTwo();
console.log(oopsGlobal);