console.clear()

const date = new Date('1980-08-31 00:00:00')

try {

    if (!isValidDate(date)) {
        throw new Error("Data inválida")
    }
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
    const actual = date.toLocaleDateString('pt-BR', options)
    console.log(actual);
} catch (error) {
    console.log(error);
}

function isValidDate(dateString) {
    let date = new Date(dateString)

    const values = {
        year: "1900"
    }

    if (date.getFullYear() < values.year)
        throw new Error("Ano inválido")


    return !isNaN(date.getTime())
}

