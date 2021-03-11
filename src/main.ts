import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { rootStore } from './store';
import { i18n } from './plugins/vue-i18n-next-plugin';
import { Myapp } from '@/plugins/myapp/';
import { FlagIcons } from '@/plugins/flags-icons/';

createApp(App)
  .use(rootStore)
  .use(router)
  .use(i18n)
  .use(Myapp)
  .use(FlagIcons)
  .mount('#app');
