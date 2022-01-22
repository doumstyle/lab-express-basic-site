const express   = require("express");
const hbs       = require("hbs");
const app       = express();
const path      = require("path");

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.render('home', {
        css: ["home"],
        picture: 'https://bit.ly/3n07Xqa',
    });
});

app.get('/works', (req, res, next) => {
    res.render('works', {
        css: ["work"],
    })
});

app.get('/about', (req, res, next) => {
    res.render('about', {
        css: ["about"],
    })
});

app.listen(3000);