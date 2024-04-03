// Test if two objects, and their child objects, are NOT equal, using the === operator.
console.clear()
const assert = require('assert')

try {
  assert.notDeepEqual({ a: 1 }, { b: 1 })
} catch (error) {
  console.error("Error", error)
}