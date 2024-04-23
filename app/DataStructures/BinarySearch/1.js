console.clear()
// Usado para lista ordenada
function binarySearch(data, target) {
  let lower = 0
  let higher = data.length - 1

  while (lower <= higher) {
    const middle = Math.floor((lower + higher) / 2)
    const guess = data[middle]

    if (guess == target) {
      return middle
    }

    if (guess > target) {
      higher = middle - 1
    } else {
      lower = middle + 1
    }
  }
  return null
}

const search = binarySearch([1, 2, 3, 4, 5], 40)

if (search) {
  console.log("Found")
} else {
  console.log("Not Found")
}