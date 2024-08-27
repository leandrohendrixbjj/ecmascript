// 1-) setInterval é uma função global o seu this pertence é this do obj window
// 2-) Isso acontence quando usamos functions

console.clear()

function Person () {
  this.age = 0

  setInterval(function () {
    this.age = this.age + 1
    console.log('Qual é a idade', this.age)
  }, 1000)
}
/* eslint-disable */
new Person()
