// import * as Sentry from '@sentry/browser';
// import * as Integrations from '@sentry/integrations';
import axios from 'axios';
import 'view-design/dist/styles/iview.css';
import Vue from 'vue';
import App from './App.vue';
import './assets/css//my-theme/index.less';
import './assets/css/components/common-iview.styl';
import './assets/css/components/common.styl';
import Common from './assets/js/common';
import './assets/js/filters';
import router from './router';
import store from './store';

// 挂载在vue实例下的全局方法
Vue.use(Common);

// 挂载在vue实例下的$http用于上传，其他在 api-client.js 中
Vue.prototype.$http = axios.create({
  baseURL: window.location.origin,
  timeout: 900000,
  headers: {
    'Content-Type': 'mulipart/form-data',
  },
});

// WARNING: 使用一个空的Vue实例作为中央事件总线 https://segmentfault.com/a/1190000010530600
let bus = new Vue();
Vue.prototype.bus = bus;

// TODO: log: Sentry - bug 监控
// if (process.env.NODE_ENV !== 'development' && typeof window !== 'undefined') {
//   Sentry.init({
//     dsn: process.env.VUE_APP_SENTRY_DSN,
//     integrations: [new Integrations.Vue({ Vue, attachProps: true })],
//     environment: process.env.NODE_ENV,
//   });
// }

Vue.config.devtools = process.env.NODE_ENV !== 'production';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
