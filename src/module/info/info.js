/**
 * Created by Duyb on 2016/11/29.
 */
import Vue from 'vue'
import Info from '../../components/info.vue'

new Vue({
  el: '#info',
  render: h => h(Info) // 将h作为createElement的别名是一个通用惯例
})
