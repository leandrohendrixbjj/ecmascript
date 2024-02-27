console.clear()

const data = [
  { name: 'Leandro', state: 'SP' },
  { name: 'Soares', state: 'MG' },
  { name: 'Ribeiro', state: 'SP' }
]

function groupBy(data, state) {
  return data.reduce((acc, data) => {
    const key = data['state']

    if (!acc[key]) {
      acc[key] = []
    }

    acc[key].push(data)

    return acc

  }, {})
}


const group = groupBy(data, 'state')

console.log(group);