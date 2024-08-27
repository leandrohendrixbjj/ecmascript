console.clear()

// Invoca uma função com um dado valor this e argumentos passados individualmente.
// CALL() aceita uma lista de argumentos,
// APPLY() aceita um único array de argumentos.

function show () {
  return arguments
}

const data = show.call(this, { name: 'leandro' }, 30, ['Honda', 'Suzuki'])

console.log(data)
