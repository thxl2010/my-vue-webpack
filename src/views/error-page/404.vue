<template>
  <div class="content">
    <div class="error404">
      <div class="error404-body-con">
        <Card>
          <div class="error404-body-con-title">
            4<span><Icon type="ios-navigate-outline"></Icon></span>4
          </div>
          <p class="error404-body-con-message">呃，好像走丢了......</p>
          <div class="error404-btn-con">
            <Button
              @click="goHome"
              size="large"
              style="width: 200px"
              type="text"
              >返回首页</Button
            >
            <Button
              @click="backPage"
              size="large"
              style="width: 200px; margin-left: 40px"
              type="primary"
              >返回上一页</Button
            >
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import { Button, Card, Icon } from 'view-design';

export default {
  name: 'Error404',
  data() {
    return {};
  },
  methods: {
    backPage() {
      this.$router.go(-1);
    },
    goHome() {
      this.$router.push({
        name: 'Home',
      });
    },
  },
  components: {
    Button,
    Card,
    Icon,
  },
};
</script>

<style lang="less">
@import './404.less';
</style>
