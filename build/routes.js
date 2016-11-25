/**
 * Created by Duyb on 2016/11/25.
 */
var express = require('express');
var router = express.Router();

var home = require('../src/controllers/home');

/* GET page. */
router.get('/', home.index);
router.get('/index', home.index);

module.exports = router;