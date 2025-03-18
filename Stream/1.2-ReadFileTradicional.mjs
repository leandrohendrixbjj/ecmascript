import fs from 'fs'

console.clear()

fs.readFile('./../usersBig.csv', 'utf-8', (error, data) => {
  if (error) {
    console.log('Error File:', error)
    throw error
  }
  console.log('File Content:', data)
})
