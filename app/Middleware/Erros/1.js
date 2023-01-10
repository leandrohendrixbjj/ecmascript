// Middlewares de manipulação de erros sempre levam quatro argumentos. (err, req, res, next)

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Você define os middlewares de manipulação de erros por último, após outros app.use() e chamads de rota; por exemplo:
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser());
app.use(methodOverride());
app.use(function (err, req, res, next) {
    // logic
});