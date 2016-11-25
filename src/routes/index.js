var express = require('express');
var router = express.Router();
var home = require('../controllers/home');



/* GET page. */
router.get('/', home.index);
router.get('/home', home.index);

module.exports = router;