// ########################################
// Remove items where are at exceptionList#                                 
// ########################################
console.clear()

let data = [1, 2, 3, 4, 5]
const exceptionList = [1, 2]

for (let row in exceptionList) {
  data = data.filter(item => item !== exceptionList[row])
}

console.log(data);
