const express = require('express');
const app = express(); //calling express function 

app.get('/', (req, res) => {
    console.log('Here');
    res.render('index');
});
app.get('/potatoe', (req, res) => {
    res.send('<p> Here are your potatoes </p>');
});

app.get('/status', (req, res) => {
    res.status(500).send('Hoi');
});

app.listen(3030);