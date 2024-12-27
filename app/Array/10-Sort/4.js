//Ordena os grupos de valoes de um objeto
console.clear()

const people = [
   { name: 'Zilmara', age: 15 },
   { name: 'Will', age: 20 },
   { name: 'Fernanda', age: 30 },
   { name: 'Bruna', age: 40 },
   { name: 'Ana', age: 60 }
]

function orderBy(a, b, field = 'age') {
   return (a[field] > b[field]) ? 1 : (a[field] < b[field]) ? -1 : 0
}


console.log(people.sort(orderBy));