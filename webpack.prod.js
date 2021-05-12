const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPLugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  // [devtool-source-map](https://webpack.js.org/configuration/devtool/)
  devtool: 'nosources-source-map',
  module: {
    rules: [
      // ! [加载 CSS](https://www.webpackjs.com/guides/asset-management/#%E5%8A%A0%E8%BD%BD-css)
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPLugin({
      patterns: [{ from: 'public', to: 'public' }],
    }),
    new webpack.DefinePlugin({
      BASE_URL: 'https://hello.com',
      API_BASE_URL: 'https://api.hello.com',
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    // 提取公共模块
    splitChunks: {
      // chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
});
