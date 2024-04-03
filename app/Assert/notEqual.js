// Test if two values, are NOT equal, using the === operator.
console.clear()
const assert = require('assert')

try {
  assert.notEqual(1, 2)
} catch (error) {
  console.error("Error", error)
}