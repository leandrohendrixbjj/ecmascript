console.clear()

// Podemos utilizar métodos delete and sizr

const data = new Map()

data.set('leandro', { adress: 'Rua A', number: 2 })
data.set('ana', { adress: 'Rua C', number: 30 })
data.set('pedro', { adress: 'Rua C', number: 30 })

data.delete('ana')
console.log(data.size)
