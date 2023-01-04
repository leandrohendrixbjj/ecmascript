const express = require('express');
const app = express();
// Middlewares de nível do aplicativo a uma instância do objeto app
// usando as funções app.use()

// Este exemplo mostra uma função de middleware sem um caminho de montagem. 
// A função é executada sempre que o aplicativo receber uma solicitação.
app.use((req, res, next) => {
    console.log('Time', Date.now());
    next();
});

app.listen(3000, () => {
    console.log("Server is running");
})