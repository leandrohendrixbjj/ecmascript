/*
  setInterval: repetem chamadas de funções ou executam trechos de código,
  com um tempo de espera fixo entre cada chamada
*/
console.clear()

let index = 0
const intervalTime = 1000

const myInterval = setInterval(() => {
  index++
  console.log(index)

  if (index === 5) {
    console.log('Stop running')
    stop()
  }
}, intervalTime)

function stop () {
  clearInterval(myInterval)
}
