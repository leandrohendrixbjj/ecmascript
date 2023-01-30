
async function validaCNPJ(cnpj) {
    return new Promise((resolve, reject) => {
        var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        var c = String(cnpj).replace(/[^\d]/g, '')

        if (c.length !== 14)
            reject("Error numero de caracteres")

        if (/0{14}/.test(c))
            reject("[1] => Cnpj inválido")

        for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
        if (c[12] != (((n %= 11) < 2) ? 0 : 11 - n))
            reject("[2] => Cnpj inválido")

        for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
        if (c[13] != (((n %= 11) < 2) ? 0 : 11 - n))
            reject("[3] => Cnpj inválido")

        resolve("CNPJ Correto");
    })
}

async function start(cnpj) {
    try {
        let result = await validaCNPJ(cnpj);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

start("54651716000188");