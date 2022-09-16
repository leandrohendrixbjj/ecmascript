const valorInicial = 0;

const rockets = [
    { country: "Russia", launches: 10 },
    { country: "US", launches: 2 },
    { country: "China", launches: 1 },    
];
  
const tot = rockets.reduce( ( prevVal, rockets ) => prevVal + rockets.launches, valorInicial);
console.log(tot);