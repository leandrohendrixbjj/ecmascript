// 1-) setInterval é uma função global o seu this pertence é this do obj window

/* eslint-disable */
console.clear()

function Person () {
  that = this // Isso é um modo elegante de resolver o 'problema' anterior
  this.age = 0

  setInterval(function () {
    that.age = that.age + 1
    console.log('Qual é a idade', that.age)
  }, 1000)
}
new Person()
