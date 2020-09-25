<template>
  <div class="side-service">
    <a
      class="side-server-img side-server-phone"
      target="_blank"
      :href="`tel:${SERVICE_PHONE}`"
    >
      <div class="inner">
        <div class="qq-server-test">
          <p>客服电话</p>
          <p>{{ SERVICE_PHONE }}</p>
        </div>
      </div></a
    ><a
      class="side-server-img side-server-qq"
      target="_blank"
      :href="SERVICE_QQ"
    >
      <div class="inner">
        <p>点击联系QQ</p>
      </div></a
    >
    <div class="side-server-img side-service-wechat">
      <div class="inner-container">
        <div class="inner-triangle inner-triangle-0">
          <div class="inner-triangle inner-triangle-1"></div>
        </div>
        <div class="inner"></div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.side-service
  position: fixed
  right: 2px
  bottom: 170px
  display: inline-block
  cursor: pointer
  z-index: 2
  .side-server-img
    position relative
    display block
    width 40px
    height 40px
    background-image url("~@/assets/img/icons.png")
    background-repeat no-repeat
    background-position-x -484px
    &:hover
      background-position-x -544px
      .inner, .inner-container
        display block !important
    &:nth-child(1)
      background-position-y -144px
      .inner
        left -144px
        padding-top 6px
    &:nth-child(2)
      background-position-y -224px
      .inner
        left -145px
        top -6px
        padding-top 15px
    &:nth-child(3)
      background-position-y -304px
      .inner-container
        display none
        position absolute
        left -174px
        top -58px
        .inner
          position relative
          width 160px
          height 160px
          background-image url("~@/assets/img/service-wechat.jpg")
          box-shadow 0 0 4px 1px #ddd
        .inner-triangle
          position absolute
          width 0
          height 0
          border-width 8px 0 8px 18px
          border-style solid
          z-index -1
          &.inner-triangle-0
            border-color transparent transparent transparent #ddd
            right -18px
            top 70px
          .inner-triangle-1
            border-color transparent transparent transparent #fff
            right 2px
            top -8px
  .inner
    display none
    position absolute
    text-align center
    color #666
    width 146px
    height 56px
    background url("~@/assets/img/icon-tooltip.png")
    background-repeat no-repeat
    background-size contain
    z-index 1
    p
      text-indent -12px
</style>

<script type="text/babel">
const SERVICE_QQ = process.env.VUE_APP_SERVICE_QQ;
const SERVICE_PHONE = process.env.VUE_APP_SERVICE_PHONE;

export default {
  name: 'SideService',
  data() {
    return {
      name: '客服',
      SERVICE_QQ,
      SERVICE_PHONE,
    };
  },
};
</script>
