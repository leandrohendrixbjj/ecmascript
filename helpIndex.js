
console.clear()

const arr = [5, 4, 3, 2, 1, 0]

const binarySearch = (arr, target) => {

  let keepSearching = false
  let mewArr = []
  let valueOfHalfArr = (arr.length / 2)
  let positionAtMiddleArr = Math.ceil(valueOfHalfArr) - 1
  let valueAtMiddleware = arr[positionAtMiddleArr]

  if (valueAtMiddleware == target)
    return valueAtMiddleware

  return valueAtMiddleware
}

const data = binarySearch(arr, 0)

console.log('data:', data);