console.clear()

/*
  Static method returns a floating-point, pseudo-random number that's greater than
  or equal to 0 and less than 1,
*/

const MIN = 1
const MAX = 5
const dontShowZero = 1

setInterval(() => {
  console.log(Math.random())

  console.log(Math.random() * MAX)

  console.log(
    Math.round(
      Math.random() * (MIN, MAX) + dontShowZero)
  )
}, 2000)
