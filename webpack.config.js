var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin") // 分离css
var HtmlWebpackPlugin = require('html-webpack-plugin') // 自动生成 HTML 文件
var CleanPlugin = require('clean-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash'); // hash

var webpackConfig;

webpackConfig = {
  entry: './src/index.js',
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
    new HtmlWebpackPlugin({
      filename: 'views/index.html',
      template: './src/views/index.html',
      //hash: true,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // jquery
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new CommonsChunkPlugin('vendor', './assets/js/thirdParty/vendor.js') //这是第三方库打包生成的文件

  ]
};

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

module.exports = webpackConfig;