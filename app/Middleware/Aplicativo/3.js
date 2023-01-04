const express = require('express');
const app = express();
// Middlewares de nível do aplicativo a uma instância do objeto app
// usando as funções app.use() e app.METHOD()

// Para pular o restante das funções de middleware de uma pilha de middlewares do roteador, 
// chame next('route') para passar o controle para a próxima rota. 
// NOTA: O next('route') irá funcionar apenas em funções de middleware que são carregadas 
// usando as funções app.METHOD() ou router.METHOD().
// Este exemplo mostra uma sub-pilha de middleware que manipula solicitações GET no caminho /user/:id.
app.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next route
    if (req.params.id == 0) next('route');
    // otherwise pass the control to the next middleware function in this stack
    else next(); //
}, function (req, res, next) {
    // render a regular page
    res.render('regular');
});

// handler for the /user/:id path, which renders a special page
app.get('/user/:id', function (req, res, next) {
    res.render('special');
});

app.listen(3000, () => {
    console.log("Server is running");
})