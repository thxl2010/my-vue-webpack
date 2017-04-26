/**
 * Created by Duyb on 2016/11/25.
 */
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var debug = require('debug')('vue-webpack:server');
var webpack = require('webpack');
var config = require('../webpack.config.js');
var WebpackDevMiddleware = require('webpack-dev-middleware');
var WebpackHotMiddleware = require('webpack-hot-middleware');

var compiler = webpack(config); // 调用webpack并把配置传递过去

var routes = require('../src/routes/index');


var app = express(); // 实例化Express对象
var mode = app.get('env');  // development production

// 注册中间件
if (mode === 'development') {
  console.log('config.output.publicPath : ', config.output.publicPath);
  // 使用 webpack-dev-middleware 中间件
  var devMiddleware = WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      color: true,
      chunks: false
    }
  })

// 使用 webpack-hot-middleware 中间件
  var hotMiddleware = WebpackHotMiddleware(compiler, {
    log: console.log
  });

// webpack插件，监听html文件改变事件
  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
      // 发布事件
      hotMiddleware.publish({ action: 'reload' })
      cb()
    })
  })

  app.use(devMiddleware);
  app.use(hotMiddleware);
}

//******************************* ↓↓↓↓ Express ↓↓↓↓ *******************************

// view engine setup
app.set('views', path.join(__dirname, '../dist/views')); // 视图
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
if (mode === 'production') {
  app.use(express.static(path.join(__dirname, '../dist'))); // 利用 Express 托管静态文件 http://www.expressjs.com.cn/starter/static-files.html
}

// routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3008');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
  console.log( 'vue-webpack started in ' + app.get('env') +' mode, on http://localhost:' +
      app.get('port') + ' .' );
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

module.exports = app;
