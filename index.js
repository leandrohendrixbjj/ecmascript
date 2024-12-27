console.clear()

//  Method is often used in condition inside while loop.


const data = [1,2,3]
var sum = 1

while (typeof (sum = data.shift()) !== 'undefined') {  
  sum+=sum
  console.log(sum)
}

console.log(`Sum: ${sum}`)
