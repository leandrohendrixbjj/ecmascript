console.clear()

/*
   IndexOf: consegue validar se parte da string selecionada
   existe no elemento dentro do array
*/

const search = 'le'
const data = ['leandro', 'soares', 'leonardo']

for (const row in data) {
  if (data[row].indexOf(search) > -1) {
    console.log(data[row])
  }
}
