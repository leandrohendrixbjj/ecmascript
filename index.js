console.clear()
// Converte valores em javascript para uma String JSON

console.log(JSON.stringify({})) // {}
console.log(JSON.stringify(true)) //true
console.log(JSON.stringify('leandro')) //"leandro"
console.log(JSON.stringify({ "name": "Papa" })) //"leandro"

const obj = JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function (k, v) {
    if (typeof v === 'object') {
        return 'a object'
    }
    return false
});

console.log(obj);

