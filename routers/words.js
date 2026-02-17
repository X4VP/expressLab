const express = require('express');
const router = express.Router();



router.get('/word', (req, res)=>{
res.send('Words Home Page');

});

router.get('/WordofTheDay', (req, res)=>{

res.send('Word of the Day');

});

module.exports = wordRouter;