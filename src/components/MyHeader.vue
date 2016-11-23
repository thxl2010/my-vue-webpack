<template>
  <div>
    <h4 class="h4"><b>组件：</b>{{headerText}}</h4>
    <ul v-for="header in headerList">
      <li>
        <a :href="header.link" class="header">{{header.name}}</a>
      </li>
    </ul>
  </div>
</template>
<!-- 希望组件内写的css只对当前组件起作用，只需要在style中写入scoped -->
<style lang="stylus" scoped>
  .h4
    background-color #abf932
  .header
    color: #19ccdd
    &:hover
      color: #258fdd;

</style>
<script>
    export default{
        data(){
            return{
                headerList: [
                  {name: 'Webpack', link: 'http://webpack.github.io/'},
                  {name: 'vue-loader', link: 'http://vue-loader.vuejs.org/en/'},
                  {name: 'Vue', link: 'http://cn.vuejs.org/v2/guide/'},
                  {name: 'vuex', link: 'http://vuex.vuejs.org/zh-cn'}
                ],
                headerText: 'components Vue.js - 单页面组件'
            }
        }
    }
</script>
