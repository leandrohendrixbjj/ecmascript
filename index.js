console.clear()
const { Parser } = require('json2csv')
const fs = require('fs')

const tickets = [
    {
        "id": 1,
        "area": "GTF",
        "User": 123
    },
    {
        "id": 2,
        "area": "ZKM",
        "User": 456
    }
]

const parseObj = new Parser()
const csv = parseObj.parse(tickets)

fs.writeFileSync('./data.csv', csv)