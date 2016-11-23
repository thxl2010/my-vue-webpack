<template>
  <div id="app">
    <img src="../assets/img/logo.png">
    <h1>{{ msg }}</h1>
    <h1>{{ text }}</h1>
    <input v-model="text" class="active">
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

    <h6 class="describe">3. 循环: v-for="user in users"</h6>
    <ol>
      <li v-for="todo in todos0"
          v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"
          v-on:mouseover="mouseoverColor"
          v-on:mouseout="mouseoutColor">
        {{ todo.text }}
      </li>
    </ol>
    <h6>4.v-on 指令绑定一个监听事件用于调用我们 Vue 实例中定义的方法：</h6>
    <button v-on:click="reverseArray">Reverse</button>

    <!-- 组件 -->
    <my-header></my-header>
  </div>
</template>

<script>
import MyHeader from './MyHeader.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      text: 'hello Webpack!',
      todos0: [
        {text: 'Learn JavaScript'},
        {text: 'Learn Vue'},
        {text: 'Build something awesome'}
      ],
      activeColor: '#ff3700',
      fontSize: 14
    }
  },
  methods: {
    reverseArray: function () {
        this.todos0.reverse();
    },
    mouseoverColor: function () {
      this.activeColor = '#ff00ff';
    },
    mouseoutColor: function () {
      this.activeColor = '#777'
    }
  },
  components: { // 注册组件
    MyHeader
  }
}

</script>

<style lang="stylus">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

  h1, h2
    font-weight: normal;

  ul
    list-style-type: none;
    padding: 0;
    li
      display: inline-block;
      margin: 0 10px;
      a
        color #42b983
.active
  color: #41b883

</style>
