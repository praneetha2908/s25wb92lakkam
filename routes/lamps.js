var express = require('express');
var router = express.Router();

/* GET Lamps search results page. */
router.get('/', function(req, res, next) {
  res.render('lamps', { title: 'Search Results: Lamps' });
});

module.exports = router;

