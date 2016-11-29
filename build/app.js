var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var routes = require('../src/routes/index');


var app = express(); // 实例化Express对象

// view engine setup
app.set('views', path.join(__dirname, '../dist/module')); // 视图
// app.set('view engine', 'jade');  // 模板引擎

// html
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// 禁用X-Powered-By
app.disable('x-powered-by');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, '../src/assets/img/logo.png')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist'))); // 利用 Express 托管静态文件 http://www.expressjs.com.cn/starter/static-files.html

// routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
