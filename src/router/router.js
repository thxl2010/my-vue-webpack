/**
 * =============================================
 * [路由配置](https://router.vuejs.org/zh/guide/)
 * =============================================
 * '@': resolve('src'),
 * 'V': resolve('src/views'),
 * 'C': resolve('src/components')
 */

import Main from 'C/Main';

// WARNING: [懒加载](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)
const Error403 = () => import('V/error-page/403');
const Error404 = () => import('V/error-page/404');

/**
 * 首页
 */
const Home = () => import('V/home/Home');
/**
 * 营销中心
 */
const Marketing = () => import('V/marketing/Marketing');
/**
 * 会员管理
 */
const MemberList = () => import('V/member/MemberList');
/**
 * 设置
 */
const Settings = () => import('V/settings/Settings');
const Recharge = () => import('V/settings/Recharge');
const Renewal = () => import('V/settings/Renewal');

// 不作为Main组件的子页面展示的页面单独写，如下
// WARNING: 需声明在 page404 之前
export const page404 = {
  path: '/*',
  name: 'Error404',
  meta: { title: '404-页面不存在' },
  component: Error404,
};

export const page403 = {
  path: '/403',
  meta: { title: '403-权限不足' },
  name: 'Error403',
  component: Error403,
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = [];

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  // 首页
  {
    path: '/',
    redirect: '/view/home',
  },
  {
    path: '/view/',
    component: Main,
    children: [
      {
        path: '/',
        redirect: '/view/home',
      },
      {
        path: 'home',
        name: 'Home',
        meta: {
          title: '首页',
          requiredAuth: 'login',
        },
        component: Home,
      },
    ],
  },

  {
    path: '/view/marketing/',
    component: Main,
    children: [
      {
        path: '/',
        name: 'Marketing',
        meta: {
          title: '营销中心',
          requiredAuth: 'login',
        },
        component: Marketing,
      },
    ],
  },

  {
    path: '/view/member/',
    component: Main,
    children: [
      {
        path: '/',
        name: 'MemberList',
        meta: {
          title: '会员管理',
          requiredAuth: 'login',
        },
        component: MemberList,
      },
    ],
  },

  {
    path: '/view/settings/',
    component: Main,
    children: [
      {
        path: '/',
        name: 'Settings',
        meta: {
          title: '设置',
          requiredAuth: 'login',
        },
        component: Settings,
      },
      {
        path: 'recharge',
        name: 'Recharge',
        meta: {
          title: '充值',
          requiredAuth: 'login',
        },
        component: Recharge,
      },
      {
        path: 'renewal',
        name: 'Renewal',
        meta: {
          title: '软件续费',
          requiredAuth: 'login',
        },
        component: Renewal,
      },
    ],
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // ! route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/home'),
  // },
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [...otherRouter, ...appRouter, page403, page404];
