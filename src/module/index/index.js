/**
 * Created by Duyb on 2016/11/18.
 */
import Vue from 'vue'
import App from '../../components/App.vue'

new Vue({
  el: '#app',
  render: h => h(App) // 将h作为createElement的别名是一个通用惯例
})
