<template>
  <Modal
    v-model="visible"
    class="c-check-version-support"
    :z-index="999"
    :mask-closable="closable"
    :closable="closable"
    :width="460"
  >
    <Icon type="md-alert"></Icon>
    <div class="tip-block">
      <p>
        {{ currentVersion }}无法使用此模块，如需使用请升级至{{ supportVersion }}
      </p>
    </div>

    <div slot="footer">
      <Button type="text" @click="visible = false" v-if="closable">取消</Button>
      <Button type="primary" @click="_upgrade">立即升级</Button>
    </div>
  </Modal>
</template>

<script type="text/babel">
import { Button, Icon, Modal } from 'view-design';
import { mapState } from 'vuex';
import { PRODUCTION_VERSION } from '@/assets/js/components/index';

export default {
  name: 'CheckVersionSupport',
  components: {
    Button,
    Icon,
    Modal,
  },
  props: {
    noSupportShow: Boolean,
    toPath: String,
    closable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: false,
      currentVersion: '当前版本',
      supportVersion: '更高版本',
    };
  },
  watch: {
    noSupportShow(val) {
      this.visible = val;
      return val;
    },
    visible(val) {
      if (!val) {
        this.$emit('onCloseModal');
      }
      return val;
    },
    toPath(val) {
      this._getVersionName(val);
    },
  },
  computed: {
    ...mapState(['user', 'sysPermission']),
  },
  methods: {
    _upgrade() {
      this.visible = false;
      this.$emit('onGoUpgrade');
    },
    _getVersionName(path) {
      this.currentVersion = PRODUCTION_VERSION[this.user.orderVersion];
      this.supportVersion = this._getSupportVersion(
        path,
        this.user.orderVersion
      );
    },
    _getSupportVersion(path, noSupportVersion) {
      let isSupportVersion = true;
      let supportVersion = this._getNextVersion(noSupportVersion);
      let noSupportArr = Object.keys(
        this.sysPermission[supportVersion].noSupport
      );
      for (let i = 0; i < noSupportArr.length; i++) {
        if (path.indexOf(noSupportArr[i]) > -1) {
          isSupportVersion = false;
          break;
        }
      }

      return isSupportVersion
        ? PRODUCTION_VERSION[supportVersion]
        : this._getSupportVersion(path, supportVersion);
    },
    _getNextVersion(orderVersion) {
      // 入门版5可升级0和1
      return orderVersion === 5 ? 0 : orderVersion + 1;
    },
  },
};
</script>

<style lang="stylus">
@import "~@/assets/css//components/variables.styl";

.c-check-version-support
  .ivu-modal-mask, .ivu-modal-wrap
    top $headerHeight
    left $navWidth
  .ivu-icon-md-alert
    color #f90
    font-size 36px
    vertical-align top
  .tip-block
    display inline-block
    vertical-align top
    margin-left 16px
    font-size 14px
    p:first-of-type
      font-weight bold
      margin-bottom 8px
      line-height 36px
  .ivu-modal-body
    padding-top 40px
    padding-bottom 10px
  .ivu-modal-footer
    border-width 0
</style>
