const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    // [静态资源](https://webpack.js.org/configuration/dev-server/#devservercontentbase)
    // production：[copy-webpack-plugin](./webpack.prod.js)
    contentBase: path.join(__dirname, 'public'),
    open: true, // 'Google Chrome',
    // openPage: 'different/page',
    port: 3003,
    // [代理 API](https://webpack.js.org/configuration/dev-server/#devserverproxy)
    // [http-proxy-middleware#options](https://github.com/chimurai/http-proxy-middleware#options)
    proxy: {
      '/api/github': {
        target: 'https://api/github.com',
        pathRewrite: {
          '^/api/github': '',
        },
        // 不能使用 localhost:3003 作为请求 github 的 主机名
        changeOrigin: true,
      },
      '/api': 'http://10.0.0.11:8090',
    },
    // [Webpack HMR(热替换)](https://webpack.js.org/guides/hot-module-replacement/#enabling-hmr)
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: '"http://localhost:3003"',
      API_BASE_URL: '"https://api.example.com"',
    }),
  ],
});
