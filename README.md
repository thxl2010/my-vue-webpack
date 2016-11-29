# [Webpack](https://webpack.vuefe.cn/index/)

1. loaders
[vue-loader](https://github.com/vuejs/vue-loader)
babel
style-loader!css-loader!stylus-loader
url-loader?limit=8192

2. [vue.js](https://vuefe.cn/)
```
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract("css"),
      // you can also include <style lang="stylus"> or other langauges
      stylus: ExtractTextPlugin.extract("css!stylus")
    }
  }
```

3. plugins
```
var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin") // 分离css
var HtmlWebpackPlugin = require('html-webpack-plugin') // 自动生成 HTML 文件
var CleanPlugin = require('clean-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash'); // hash
```

# Vue.js多页面应用 origin/MPA
```
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

```
entry: entries, // MPA
```

```
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