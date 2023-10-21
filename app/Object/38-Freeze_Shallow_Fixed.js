// Para fazer um obj completamente imutável, congele cada objeto em obj.
// Para fazer isso, nós usamos essa função.
console.clear()

function deepFreeze(obj) {
    // Recuperar os nomes de propriedade definidos em obj
    var propNames = Object.getOwnPropertyNames(obj);

    // Congelar as propriedades antes de congelar-se
    propNames.forEach(function (name) {
        var prop = obj[name];

        // Congele prop se for um objeto
        if (typeof prop == "object" && prop !== null) deepFreeze(prop);
    });

    // Congele-se (não faz nada se já estiver congelado)
    return Object.freeze(obj);
}

const data = {
    person: { name: 'leandro' }
}

try {
    deepFreeze(data)
    Object.assign(data.person, { age: 30 })
} catch (error) {
    console.log(error)
}
console.log(data.person)