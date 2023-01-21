start("22560961814");

async function start(cpf) {
    try {
        let data = await isCpfRight(cpf);
        console.log(data);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

function isCpfRight(cpf) {
    return new Promise((resolve, reject) => {
        let document = { sum: 0, rest: "", strCPF: String(cpf).replace(/[^\d]/g, '') }

        if (document.strCPF.length !== 11) { reject("Número de digitos do cpf está incorreto"); }
        if (!seekWrongType(document.strCPF)) { reject("[1] => CPF inválido"); }

        document = firstCalc(document);

        if (!document.status) { reject("[2] => CPF inválido"); }

        document = secondCalc(document)

        if (!document.status) { reject("[3] => CPF inválido"); }

        resolve("CPF correto");
    });
}

function secondCalc(document) {

    for (row = 1; row <= 10; row++)
        document.sum = document.sum + parseInt(document.strCPF.substring(row - 1, row)) * (12 - row);

    document.rest = (document.sum * 10) % 11;

    if ((document.rest == 10) || (document.rest == 11)) { document.rest = 0; }

    if (document.rest != parseInt(document.strCPF.substring(10, 11))) {
        Object.assign(document, { status: false });
    } else { Object.assign(document, { status: true }) }

    return document;
}

function firstCalc(document) {

    for (row = 1; row <= 9; row++)
        document.sum = document.sum + parseInt(document.strCPF.substring(row - 1, row)) * (11 - row);

    document.rest = (document.sum * 10) % 11;

    if ((document.rest == 10) || (document.rest == 11)) { document.rest = 0; }

    if (document.rest != parseInt(document.strCPF.substring(9, 10))) {
        Object.assign(document, { status: false });
    } else {
        Object.assign(document, { status: true })
        document.sum = 0;
    }
    return document;
}

function seekWrongType(cpf) {
    if ([
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ].indexOf(cpf) !== -1)
        return false;

    return true;
}