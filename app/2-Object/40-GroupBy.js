// To elements using a key that is some arbitrary value, use Map.groupBy() instead. 

console.clear()
const groupBy = require("core-js")

const inventory = [
  { id: 1, name: "Leandro" },
  { id: 2, name: "Soares" },
  { id: 1, name: "Leandro" },
];

const result = Map.groupBy(inventory, ({ id }) => id);

console.log(result);