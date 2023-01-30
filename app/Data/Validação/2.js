const date = new Date("2023-01-30 00:00")

const options = { year: "numeric", month: "numeric", day: "numeric" }

const actual = date.toLocaleDateString("pt-br", options)

console.log(actual);