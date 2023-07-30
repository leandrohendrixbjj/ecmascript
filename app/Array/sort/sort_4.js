//Ordena os grupos de valoes de um objeto
console.clear()
const people = [
   {
      name: 'leandro',
      age: '30'
   },
   {
      name: 'Ana',
      age: '25'
   },
   {
      name: 'Bruna',
      age: '18'
   },
]

function orderByAsc(a, b) {
   if (a.name > b.name) return 1
   if (a.name < b.name) return -1
   return 0
}
people.sort(orderByAsc)
console.log("People Oerdered", people);