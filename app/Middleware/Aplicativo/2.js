const express = require('express');
const app = express();
// Middlewares de nível do aplicativo a uma instância do objeto app
// usando as funções app.use() e app.METHOD()

// Aqui está um exemplo de carregamento de um série de funções de middleware em um ponto de montagem, 
// com um caminho de montagem. Ele ilustra uma sub-pilha de middleware que imprime informações 
//de solicitação para qualquer tipo de solicitação HTTP no caminho /user/:id.
app.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

app.listen(3000, () => {
    console.log("Server is running");
})