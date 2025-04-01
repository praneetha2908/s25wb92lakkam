var express = require('express');
var router = express.Router();

/* GET bicycles listing. */
router.get('/', function(req, res, next) {
  let bicycles = [
    { bicycle_type: 'Mountain', wheel_size: 27.5, cost: 250 },
    { bicycle_type: 'Road', wheel_size: 28, cost: 350 },
    { bicycle_type: 'Hybrid', wheel_size: 26, cost: 200 }
  ];
  res.render('bicycles', { title: 'Search Results: Bicycles', bicycles });
});

module.exports = router;