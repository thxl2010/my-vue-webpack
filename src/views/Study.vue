<template>
  <div>
    <p>count: {{ count }}</p>
    <p>twiceTheCount : {{ twiceTheCount }}</p>
    <button @click="increase">{{ btnText }} increase</button>
    <button @click="reverse">{{ btnText }} reverse</button>
    <div>
      <ul>
        <li v-for="item in list" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, ref, onMounted, watch } from 'vue';

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
    const twiceTheCount = computed(() => count.value * 2);

    const list = ref([]);

    const increase = () => {
      count.value++;
      console.log('count :', count, ' twiceTheCount :', twiceTheCount);
      list.value = LIST;
    };

    function reverse() {
      list.value = list.value.reverse();
      console.log('list :', list);
    }

    // ! [Lifecycle Hook Registration Inside setup](https://v3.vuejs.org/guide/composition-api-introduction.html#lifecycle-hook-registration-inside-setup)
    onMounted(increase);
    onMounted(() => {
      console.log(
        '---- onMounted: Lifecycle Hook Registration Inside setup ----'
      );
      increase();
    });

    // ! [Reacting to Changes with watch](https://v3.vuejs.org/guide/composition-api-introduction.html#reacting-to-changes-with-watch)
    watch(count, (newVal, oldVal) => {
      console.log('newVal, oldVal :', newVal, oldVal);
      console.log('The new count value is: ' + count.value);
    });

    return {
      btnText,
      count,
      twiceTheCount,
      list,
      increase,
      reverse,
    };
  },
  mounted() {
    console.log('---- mounted ----');
  },
};
</script>

<style></style>
