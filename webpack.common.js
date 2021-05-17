const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    // ! [cache: hash](https://webpack.js.org/guides/caching/)
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    assetModuleFilename: 'images/[name]-[hash][ext][query]',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        // use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader'],
        enforce: 'pre',
      },

      // ! [加载图片](https://www.webpackjs.com/guides/asset-management/#%E5%8A%A0%E8%BD%BD%E5%9B%BE%E7%89%87)
      {
        test: /\.(jpe?g|gif)$/,
        use: ['file-loader'],
      },
      // {
      //   test: /\.(png)$/,
      //   dependency: { not: ['url'] },
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //       },
      //     },
      //   ],
      //   // ! to stop Asset Module from processing your assets again as that would result in asset duplication
      //   type: 'javascript/auto',
      // },

      // ! [Asset Modules - Resource assets](https://webpack.js.org/guides/asset-modules/#resource-assets)
      {
        test: /\.(png)$/,
        type: 'asset/resource', // output.assetModuleFilename 或者 generator.filename
        // generator: {
        //   filename: 'static/[hash][ext][query]',
        // },
      },
      {
        test: /\.svg$/,
        type: 'asset/inline', // base64
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),

    new VueLoaderPlugin(),
    // new StylelintPlugin(),

    // index.html
    // ! WARNING: meta 和 chunks 参数会导致HTML文件中无法注入script和link标签 ？？？
    new HtmlWebpackPlugin({
      inject: true,
      title: 'hello HtmlWebpackPlugin',
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
};
