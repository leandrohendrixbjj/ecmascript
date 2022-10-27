function verificarPalindromo(palavra) {
    var contrario = "";
    for (var i = palavra.length - 1; i >= 0; i--)
        contrario += palavra[i];

    return palavra === contrario;
}

module.exports = { verificarPalindromo }