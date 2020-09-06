const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;;

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

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});