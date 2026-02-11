const express = require('express');
const app = express(); //calling express function 

app.set('view engine','ejs');
app.get('/', (req, res) => {
    console.log('Here');
    res.render('index',{userName:'world'});
});
app.get('/potatoe', (req, res) => {
    res.send('<p> Here are your potatoes </p>');
});

app.get('/status', (req, res) => {
    res.download('server.js');

});

app.get(/users', (req, res) => {
    res.send('User List');
});

app.get('/users/new', (req, res) => {
    res.send('New User Form');

app.listen(3030);