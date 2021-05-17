import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';
import Layout from '@/components/Layout.vue';

// 1. 注册路由插件
Vue.use(VueRouter);

// 路由规则
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
  },
  {
    path: '/photo',
    name: 'Photo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "photo" */ '../views/Photo.vue'),
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    // 开启 props，会把 URL 中的参数传递给组件
    // 在组件中通过 props 来接收 URL 参数
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "detail" */ '../views/Detail.vue'),
  },
  // 嵌套路由
  {
    path: '/view/',
    component: Layout,
    children: [
      {
        name: 'index',
        path: '',
        component: Index,
      },
      {
        name: 'detail',
        path: 'detail/:id',
        props: true,
        component: () => import('@/views/Detail.vue'),
      },
    ],
  },
];
// 2. 创建 router 对象
const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
