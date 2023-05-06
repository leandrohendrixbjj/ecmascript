console.clear();

const customer = {
    name: "leandro",
    age: 23
}

const keys = Object.keys(customer)

if (keys.includes("name")) {
    console.log("Achou a chave: name");
}