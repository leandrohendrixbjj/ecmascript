console.clear()

// Reduce => String, NUmero, []

const info = [
  {
    name:'leandro',
    motos: ['vstrom','xj']
  },
  {
    name:'soares',
    motos: ['cg','intruder']
  }
]

const data = info.reduce((acc,el) => {
  return [...acc, ...el.motos]
},[])

console.log(data);




