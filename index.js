const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  var tableify = require('tableify');
  const solver = require('./solver');
  res.render('index', { 
    title: 'Circle-A-Word', 
    html: solver.toHTML(),
    words: solver.formattedWords(),
   });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});