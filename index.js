const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/auth/google', (req, res) => {
    res.render('auth/google');
});

 app.listen(3000);

app.use( (req, res, next) => {
    res.status(404).send('Sorry, page not found!');
})
