export default {
  install(Vue) {
    // [添加实例方法](https://cn.vuejs.org/v2/guide/plugins.html)
    Vue.prototype.shopInit = (callback) => {
      callback && callback();
    };

    Vue.prototype.$catchError = (err) => {
      if (err && (err.errorMessage || err.msg || err.message)) {
        Vue.$Message.error({
          content: err.errorMessage || err.msg || err.message,
        });
      } else {
        console.error('catch err :', err);
      }
    };
  },
};
