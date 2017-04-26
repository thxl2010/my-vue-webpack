# [Webpack](https://webpack.vuefe.cn/index/)

1. loaders
[vue-loader](https://github.com/vuejs/vue-loader)
babel
style-loader!css-loader!stylus-loader
url-loader?limit=8192

2. [vue.js](https://vuefe.cn/)
```js
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract("css"),
      // you can also include <style lang="stylus"> or other langauges
      stylus: ExtractTextPlugin.extract("css!stylus")
    }
  }
```

3. plugins
```js
var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin") // 分离css
var HtmlWebpackPlugin = require('html-webpack-plugin') // 自动生成 HTML 文件
var CleanPlugin = require('clean-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash'); // hash
```

# Vue.js多页面应用 origin/MPA
```js
var glob = require('glob'); // 这里的glob是nodejs的glob模块，是用来读取webpack入口目录文件的
var entries = getEntry('./src/module/**/*.js'); // 获得入口js文件
var pages = getEntry('./src/module/**/*.html');

function getEntry(globPath) {
  var entries = {},
      basename, tmp, pathname;

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(-3);
    pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
    entries[pathname] = entry;
  });
  console.log(entries);
  return entries;
}
```

```js
entry: entries, // MPA
```

```js
for (var pathname in pages) {
  // 配置生成的html文件，定义路径等
  var conf = {
    filename: pathname + '.html',
    template: pages[pathname], // 模板路径
    chunks: [pathname, 'vendor', 'manifest'], // 每个html引用的js模块
    inject: true              // js插入位置
  };
  // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
  webpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}
```

# 热加载
1. [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)  [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)
2. webpack.config
```js
if (process.env.NODE_ENV === 'development') {
  webpackConfig.entry = ['webpack/hot/dev-server', 'webpack-hot-middleware/client?reload=true&&timeout=20000', path.resolve(__dirname, './src/index.js')]; // 热加载
  webpackConfig.output.publicPath = '/';
  webpackConfig.plugins = (webpackConfig.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin(), // 热加载
    new OpenBrowserPlugin({ url: `http://localhost:${(process.env.PORT || 3008)}/views/index.html` })
  ])
}
```

3. Express server
```js
var webpack = require('webpack');
var config = require('../webpack.config.js');
var WebpackDevMiddleware = require('webpack-dev-middleware');
var WebpackHotMiddleware = require('webpack-hot-middleware');

var compiler = webpack(config); // 调用webpack并把配置传递过去

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

```