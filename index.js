// Ambas as funções tem o mesmo resultado
console.clear()

function isRed2(fruit){

  if (fruit === 'apple' ||
      fruit === 'cherries' ||
      fruit === 'strawberry' ){
    return true
  }
  return false
  
}

const isRed = fruit =>
  ['apple', 'cherries', 'strawberry'].includes(fruit)


console.log(
  isRed('apple')
)