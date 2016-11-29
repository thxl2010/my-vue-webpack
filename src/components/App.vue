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

    <div>
      <h1>表单控件</h1>
      <h6>单个勾选框，逻辑值：</h6>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>

      <h6>多个勾选框，绑定到同一个数组：</h6>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{checkedNames}}</span>

      <h6>单选列表:</h6>
      <select v-model="selected">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>

      <h6>多选列表（绑定到一个数组）：</h6>
      <select v-model="selectedArr" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ selectedArr }}</span>

      <h6>动态选项，用 v-for 渲染：</h6>
      <select v-model="selected2">
        <option v-for="option in options" v-bind:value="option.value">
          {{option.text}}
        </option>
      </select>
      <span>Selected: {{ selected2 }}</span>

      <h5>绑定 value</h5>
      <h6>
        对于单选按钮，勾选框及选择列表选项， v-model 绑定的 value 通常是静态字符串（对于勾选框是逻辑值）.
        但是有时我们想绑定 value 到 Vue 实例的一个动态属性上，这时可以用 v-bind 实现，并且这个属性的值可以不是字符串。
      </h6>
      <input
          type="checkbox"
          v-model="toggle"
          v-bind:true-value="a"
          v-bind:false-value="b"
      >
      <span>toggle: {{toggle}}</span>

      <input type="radio" v-model="pick" v-bind:value="a">
      <input type="radio" v-model="pick" v-bind:value="b">
      <span>pick: {{pick}}</span>

      <select v-model="selectedValue">
        <!-- 内联对象字面量 -->
        <option v-bind:value="{ number: 1111 }">1111</option>
        <option v-bind:value="{ number: 2222 }">2222</option>
      </select>
      <span>selectedValue: {{selectedValue}}</span>

      <h1>修饰符</h1>
      <h6>.lazy: 在默认情况下， v-model 在 input 事件中同步输入框的值与数据，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步：</h6>
      <!-- 在 "change" 而不是 "input" 事件中更新 -->
      <input v-model.lazy="msg" >

    </div>
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
      fontSize: 14,
      checked: true,
      checkedNames: [],
      selected: 'A',
      selectedArr: ['B', 'C'],
      selected2: 'C',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      toggle: 'a',
      pick: 'a',
      selectedValue: { number: 1111 },
      a: 'a',
      b: {value: 'b'}
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
