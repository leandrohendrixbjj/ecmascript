const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };

/*Tradicional*/
const max = (stats) => {
  return stats.max;
}
console.log('Maximo', max(stats));

/*Usando Destruction Assigment*/
const min = ({min}) => (min);
console.log('Min', min(stats));

const half = ({max, min}) => (max + min) / 2.00;
console.log('Half', half(stats));



