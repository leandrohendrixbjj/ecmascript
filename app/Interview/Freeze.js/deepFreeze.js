console.clear();

// Função deepFreeze congela 100% um objeto
function deepFreeze(obj) {

    // Recuperar os nomes de propriedade definidos em obj
    var propNames = Object.getOwnPropertyNames(obj);

    // Congelar as propriedades antes de congelar-se
    propNames.forEach(function (name) {
        var prop = obj[name];

        // Congele prop se for um objeto
        if (typeof prop == 'object' && prop !== null)
            deepFreeze(prop);
    });

    // Congele-se (não faz nada se já estiver congelado)
    return Object.freeze(obj);
}

const obj = {
    person: {
        name: "leandro", age: "30"
    }
}
deepFreeze(obj)

delete obj.person.name

console.log(obj);

