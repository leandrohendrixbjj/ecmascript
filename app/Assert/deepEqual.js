// Test if two objects, and their child objects, are equal, using the === operator.
console.clear()
const assert = require('assert')

try {
  assert.deepEqual({ a: 1 }, { a: 1 })
} catch (error) {
  console.error("Error", error)
}