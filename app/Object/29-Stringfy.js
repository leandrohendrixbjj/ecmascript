// O método JSON.stringify() converte valores em javascript para uma String JSON
console.clear()

JSON.stringify({});                  // '{}'
JSON.stringify(true);                // 'true'
JSON.stringify('foo');               // '"foo"'
JSON.stringify([1, 'false', false]); // '[1,"false",false]'
JSON.stringify({ x: 5 });            // '{"x":5}'

const str = JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function (k, v) {
    if (typeof v === 'object') {
        return 'a Object';
    }
});

console.log(str);