var express = require('express');
var router = express.Router();
var home = require('../controllers/home');
var info = require('../controllers/info');


/* GET page. */
router.get('/', home.index);
router.get('/home', home.index);
router.get('/info', info.index);

module.exports = router;