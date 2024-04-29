console.clear()

const list = [10, 20, 40]
const size = list.length

function sum (arr, index) {
  if (index === 0) return 0

  let stack = sum(arr, index - 1)

  stack += arr[index - 1]

  return stack
}

const data = sum(list, size)
console.log(data)
