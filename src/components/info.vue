<template>
  <div class="info">
    <h1>{{ msg }}</h1>
    <!-- 组件 -->
    <my-header></my-header>
  </div>
</template>

<script>
import MyHeader from './MyHeader.vue'

export default {
  name: 'info',
  data () {
    return {
      msg: 'this is info page - Duyb'
    }
  },
  components: { // 注册组件
    MyHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
