const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/bicycles', (req, res) => {
  res.render('bicycles', {
    title: 'Search Results: Bicycles'
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
