// Test if two values, are equal, using the === operator.
console.clear()
const assert = require('assert')

try {
  assert.equal(1, 1)
} catch (error) {
  console.error("Error", error)
}