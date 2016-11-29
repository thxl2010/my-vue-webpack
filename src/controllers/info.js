/**
 * Created by Duyb on 2016/9/11.
 */

exports.index = function(req, res, next) {

  res.render('info', { title: 'info', signature: '白马山庄', version: 2 });
};