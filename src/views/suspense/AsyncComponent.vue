<template>
  <div>
    This is our asynchronous component!!
  </div>
</template>

<script>
async function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
export default {
  async setup() {
    await wait(5000);
    return;
  },
};
</script>
