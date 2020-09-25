<template>
  <!-- 当前页标题 -->
  <div class="page-title-block">
    <label class="page-title" :title="title">{{ title }}</label>
    <!-- 返回按钮 -->
    <span
      class="blue go-back-btn"
      v-if="showBackBtnList.includes(this.routeName)"
      @click="goMemberMktBack()"
    >
      返回列表>
    </span>
  </div>
</template>

<script>
export default {
  name: 'page-title',
  props: {
    title: String,
  },
  data() {
    return {
      showBackBtnList: ['MarketingPlan', 'CustomUpload'], // 显示返回列表的页面
      showMemberMarketingBtn: false, // 控制会员营销返回按钮显隐的变量
      showUploadMarketingBtn: false, // 控制自定义上传返回按钮显隐的变量
    };
  },
  created() {},
  methods: {
    goMemberMktBack() {},
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
  },
};
</script>

<style>
.go-back-btn {
  font-size: 12px;
  vertical-align: bottom;
  margin-left: 4px;
  cursor: pointer;
}
</style>
