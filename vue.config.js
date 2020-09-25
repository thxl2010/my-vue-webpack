const path = require('path');
// var SentryCliPlugin = require('@sentry/webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // style
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },

  // webpack 简单配置
  // https://cli.vuejs.org/zh/guide/webpack.html
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== 'development') {
      // config.plugins.push(
      //   new SentryCliPlugin({
      //     include: './dist',
      //     ignoreFile: '.sentrycliignore',
      //     ignore: ['node_modules', 'server'],
      //     // configFile: 'sentry.properties',
      //   })
      // );
    }

    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      // vue$: 'vue/dist/vue.runtime.esm.js',
      // '@': resolve('src'),
      V: resolve('src/views'),
      C: resolve('src/components'),
    });
  },

  // ! 将 API 请求代理到 node API 服务器
  devServer: {
    port: 3026,
    proxy: {
      '/api': {
        target: process.env.api,
        ws: true,
        changeOrigin: true,
      },
      '/api/item': {
        target: process.env.api_crm,
        ws: true,
        changeOrigin: true,
      },
      '/api/crm': {
        target: process.env.api_crm,
        ws: true,
        changeOrigin: true,
      },
      '/api/mock': {
        target: process.env.api_mock,
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
