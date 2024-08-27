console.clear()

function Person() {
  this.age = 0

  setInterval(() => {
    this.age += 1
    console.log(`Age is ${this.age}`)
  },1000)
}

new Person()