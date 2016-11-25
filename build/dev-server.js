/**
 * Created by Duyb on 2016/11/24.
 */
var express = require('express');
var http = require('http');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var routes = require('./routes.js');

var app = express(); // 创建一个express实例

var compiler = webpack(config); // 调用webpack并把配置传递过去

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    color: true,
    chunks: false
  }
})

// 使用 webpack-hot-middleware 中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler);

// webpack插件，监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    // 发布事件
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// 注册中间件
app.use(devMiddleware);
app.use(hotMiddleware);
// routes
app.use('/', routes);

// Get port from environment and store in Express.
var port = process.env.PORT || 3030;
app.set('port', port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

// 监听 3006 端口，开启服务
server.listen(port, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log( 'vue-webpack started in ' + app.get('env') +' mode, on http://localhost:' +
      app.get('port') + ' .' );
})



