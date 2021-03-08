import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { rootStore } from './store';
import { i18n } from './plugins/vue-i18n-next-plugin';

createApp(App)
  .use(rootStore)
  .use(router)
  .use(i18n)
  .mount('#app');
