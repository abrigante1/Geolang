const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));
app.use(express.static('dist'));
app.use(express.static('node_modules'));
app.use(express.static('src'));
app.use(express.static(__dirname)); //Serves resources from public folder

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('./geolang-covid-demo.ejs');
});

app.get('/editor', (req, res) => {
    res.render('./geolang-editor.ejs');
});

app.get('/covid', (req, res) => {
    res.render('./geolang-covid-demo.ejs');
});

app.get('/animations', (req, res) => {
    res.render('./geolang-animation-demo.ejs');
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});