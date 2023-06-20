console.clear();

const obj = { id: 1, name: "leandro" }

const idIsAvail = 'id' in obj //Valida um atributo dentro do array

if (idIsAvail)
    console.log(obj.name)
