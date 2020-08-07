<template>
  <div>
    <p>count: {{ count }}</p>
    <p>twiceTheCount : {{ twiceTheCount }}</p>
    <button @click="count++">Increment count</button>
    <button @click="increase">{{ btnText }} increase</button>
    <button @click="reverse">{{ btnText }} reverse</button>
    <button @click="getList">{{ btnText }} getList</button>
    <div>
      <ul>
        <li v-for="item in list" :key="item.id">
          <span>{{ item.name }}</span>
          <button @click="update(item)">update</button>
        </li>
      </ul>
    </div>

    <div>
      <p>
        <a
          href="https://v3.vuejs.org/guide/reactivity-fundamentals.html#declaring-reactive-state"
          target="_blank"
          >To create a reactive state from a JavaScript object</a
        >
      </p>
      <p>state.count : {{ state.count }}</p>
      <button @click="increaseStateCount">increase state.count</button>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref, onMounted, watch, readonly } from 'vue';
import API from 'API';

const LIST = [
  {
    id: '1',
    name: 'DU',
  },
  {
    id: '2',
    name: 'Li',
  },
  {
    id: '3',
    name: 'Chen',
  },
];

export default {
  setup() {
    const btnText = '点击按钮';
    const count = ref(0);
    // ! [Reacting to Changes with watch](https://v3.vuejs.org/guide/composition-api-introduction.html#reacting-to-changes-with-watch)
    watch(count, (newVal, oldVal) => {
      console.log('newVal, oldVal :', newVal, oldVal);
      console.log('The new count value is: ' + count.value);
    });
    const twiceTheCount = computed(() => count.value * 2);

    const increase = () => {
      count.value++;
      console.log('count :', count, ' twiceTheCount :', twiceTheCount);
    };

    // To create a reactive state from a JavaScript object
    // https://v3.vuejs.org/guide/reactivity-fundamentals.html#declaring-reactive-state
    const state = reactive({
      count: 0,
    });
    const copy = readonly(state);
    const increaseStateCount = () => {
      state.count++;
      // mutating the copy will fail and result in a warning
      // ! warning: "Set operation on key 'count' failed: target is readonly."
      copy.count++;
    };

    let list = ref(LIST);
    const getList = async () => {
      list.value = await API.fetchUserRepositories();
      console.log('async/await list :', list);
    };
    function reverse() {
      list.value = list.value.reverse();
      console.log('list :', list);
      console.log('list[0] :', list.value[0]);
    }
    const update = (item) => {
      item.name = `${item.name} ${item.content}`;
    };

    // ! [Lifecycle Hook Registration Inside setup](https://v3.vuejs.org/guide/composition-api-introduction.html#lifecycle-hook-registration-inside-setup)
    onMounted(getList);
    onMounted(() => {
      console.log(
        '---- onMounted: Lifecycle Hook Registration Inside setup ----'
      );
      increase();
    });

    return {
      btnText,
      count,
      twiceTheCount,
      increase,
      list,
      getList,
      reverse,
      update,
      state,
      increaseStateCount,
    };
  },
  mounted() {
    console.log('---- mounted ----');
  },
};
</script>

<style></style>
