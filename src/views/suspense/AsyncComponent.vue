<template>
  <div>
    This is our asynchronous component!!
    <input type="text" v-model="val" @keydown.enter="updateName" />
  </div>
</template>

<script>
import { ref } from 'vue';

async function wait(ms, emit) {
  return new Promise((resolve) => {
    setTimeout(() => {
      emit('update-name', 'Du');
      resolve();
    }, ms);
  });
}
export default {
  props: {
    name: {
      type: String,
      default: 'hello',
    },
  },
  async setup(props, { emit }) {
    const val = ref('');
    console.log('props :', props, props.name, ' emit :', emit);

    await wait(5000, emit);

    const updateName = (event) => {
      console.log('event :', event);
      emit('update-name', event.target.value);
    };
    return {
      val,
      updateName,
    };
  },
};
</script>
