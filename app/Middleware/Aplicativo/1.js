// Middlewares de nível do aplicativo a uma instância do objeto app
// usando as funções app.use()
// A função é executada sempre que o aplicativo receber uma solicitação.

const app = require('express')();

app.use((req, res, next) => {
    console.log('Time', Date.now());
    next();
});

app.post('/user', (req, res, next) => {
    console.log('Request Type:', req.method);
    res.send("User");
    next();
});

// Ilustra uma sub-pilha de middleware
app.get('/user/:id', (req, res, next) => {
    console.log('Request Resource URL', req.originalUrl);
    res.send('User');
    next();
}, (req, res, next) => {
    console.log("Request Type", req.method);;
    next();
});

app.listen(3000, () => {
    console.log("Server is running");
})