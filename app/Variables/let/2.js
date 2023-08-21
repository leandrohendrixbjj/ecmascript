// Let respeita o escopo local
console.clear()

let age = 30
try {
    let age = 50 // -> Sem o let o escopo "vaza"
    console.log(`Local is ${age}`);
} catch (error) {
    console.log(`Error:${error}`)
}

console.log(`Outside: ${age}`);
