console.clear()
// Break in FOR
const data = ['Leandro', 'Soares', 'Ribeiro']

for (let row = 0; row < data.length; row++) {
  console.log(data[row])

  if (data[row] === 'Soares') {
    break
  }
}
