var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin") // 分离css
var HtmlWebpackPlugin = require('html-webpack-plugin') // 自动生成 HTML 文件
var CleanPlugin = require('clean-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash'); // hash

var glob = require('glob'); // 这里的glob是nodejs的glob模块，是用来读取webpack入口目录文件的
var entries = getEntry('./src/module/**/*.js'); // 获得入口js文件
var pages = getEntry('./src/module/**/*.html');

var webpackConfig;

webpackConfig = {
  //entry: './src/index.js', // SPA
  entry: entries, // MPA
  output: {
    path: path.resolve(__dirname, './dist'),
    //publicPath: '/dist/',
    filename: './assets/js/[name].bundle.[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: /src/,
        exclude: /(node-modules|src\/assets\/js\/thirdParty)/
      },
      {
        test: /\.styl$/,
        //loader: 'style-loader!css-loader!autoprefixer!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
        loader: ExtractTextPlugin.extract('style', 'css!stylus')
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader?limit=8192',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract("css"),
      // you can also include <style lang="stylus"> or other langauges
      stylus: ExtractTextPlugin.extract("css!stylus")
    }
  },
  plugins: [
    new CleanPlugin('dist'),
    new webpack.optimize.OccurenceOrderPlugin(), // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.BannerPlugin('This file is created by Duyb'),
    new WebpackMd5Hash(),
    new ExtractTextPlugin('./style/[name].[contenthash].css'),
    // new HtmlWebpackPlugin({
    //   filename: './views/index.html',
    //   template: './src/views/index.html',
    //   //hash: true,
    //   inject: true,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true,
    //     removeAttributeQuotes: true
    //   },
    //   // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    //   chunksSortMode: 'dependency'
    // }),
    // jquery
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new CommonsChunkPlugin('vendor', './assets/js/thirdParty/vendor.js') //这是第三方库打包生成的文件

  ]
};

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

if (process.env.NODE_ENV === 'production') {
  webpackConfig.devtool = '#source-map';
  webpackConfig.plugins = (webpackConfig.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}

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

module.exports = webpackConfig;