// Retornar o maior valor de um array

// Number of Matches
const numbers = [3,2,1,23];

function findLargest(numbers) {
    let max = numbers.reduce( (a,b) => {
       return Math.max(a,b);
    });

    return max;
}

console.log(findLargest(numbers));

