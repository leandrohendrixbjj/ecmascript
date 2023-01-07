console.clear();

const app = require('express')();

app.get('/user/:id', function (req, res, next) {
    if (req.params.id == 0) next('route'); //Go to Special print
    else next();
}, (req, res, next) => {
    res.send('Handle user');
});

app.get('/user/:id', function (req, res, next) {
    res.send('special');
});

app.listen(3000, () => {
    console.log(`Server is running at 3000`);
}); 