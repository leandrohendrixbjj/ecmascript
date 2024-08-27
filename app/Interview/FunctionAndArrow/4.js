// 1-) Arrow: quando usamos new ela sempre vai considerar o this do objeto que foi invocado.

console.clear()

function Person () {
  this.age = 0

  setInterval(() => {
    this.age = this.age + 1
    console.log('Qual é a idade', this.age)
  }, 1000)
}
/* eslint-disable */
new Person()
