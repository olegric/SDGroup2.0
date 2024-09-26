const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});
router.get('/buycar', (req, res) => {
  res.render('car_sales', { title: 'buycar' });
});


module.exports = router;
