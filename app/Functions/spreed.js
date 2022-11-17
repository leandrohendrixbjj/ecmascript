console.clear();

function howMany(...args) {
    return `Total: ${args.length} Type: ${typeof (args)}`
}

console.log(howMany(1, 2));
console.log(howMany('Leandro'));
console.log(howMany('string', null, [1, 2, 3]));