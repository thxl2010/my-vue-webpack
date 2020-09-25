import Vue from 'vue';
import VueRouter from 'vue-router';
import { routers } from './router';

Vue.use(VueRouter);

// 路由配置
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routers,
});

router.beforeEach((to, from, next) => {
  // console.log('to, from :', to, from);
  next();
});

export default router;
