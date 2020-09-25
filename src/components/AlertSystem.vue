<template>
  <div class="alert-system">
    <!--<Alert type="warning" show-icon>全局提示</Alert>-->
  </div>
</template>

<style lang="stylus" scoped>
.alert-system
  margin-bottom 16px
</style>

<script type="text/babel">
// import { Alert } from 'view-design';

export default {
  name: 'AlertSystem',
  components: {
    // Alert,
  },
  data() {
    return {
      name: '全局提示',
    };
  },
};
</script>
