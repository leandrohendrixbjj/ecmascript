// Manipuladores de rota permitem a você definir várias rotas para um caminho.
const app = require('express')();

app.get('/user/:id', function (req, res, next) {
    if (req.params.id == 0) next('route'); //Go to Special print
    else next(); //Go to Handle user
}, (req, res, next) => {
    res.send('Handle user');
});

// Special print
app.get('/user/:id', function (req, res, next) {
    res.send('special');
});

app.listen(3000, () => {
    console.log("Server is running");
})