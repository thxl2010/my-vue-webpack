<template>
  <div>
    <p>count: {{ count }}</p>
    <button @click="increase">increase</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const increase = () => {
      count.value++;
    };

    return {
      count,
      increase,
    };
  },
};
</script>

<style></style>
