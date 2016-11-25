/**
 * Created by Duyb on 2016/11/25.
 */
var path = require('path');

exports.index = function(req, res, next) {
  //res.render('home', { title: 'Du', signature: '白马山庄', version: 2 });
  res.sendFile(path.join(__dirname, 'dist', '/views/index.html'));
};