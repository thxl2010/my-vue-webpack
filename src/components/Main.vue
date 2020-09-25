<template>
  <div ref="Main" id="main" :data-router="viewRouter">
    <header class="top-header">
      <Menu
        mode="horizontal"
        theme="primary"
        active-name="home"
        class="header-menu"
      >
        <MenuItem name="logo">
          <router-link class="logo" title="返回首页" to="/">
            HELLO_WORLD
            <img src="/favicon.ico" />
          </router-link>
        </MenuItem>

        <MenuItem
          name="home"
          class="header-page-menu"
          :class="{ active: $route.path.indexOf('/view/home') > -1 }"
        >
          <router-link to="/view/home">首页</router-link>
        </MenuItem>
        <MenuItem
          name="marketing"
          class="header-page-menu"
          :class="{ active: $route.path.indexOf('/view/marketing') > -1 }"
        >
          <router-link to="/view/marketing">营销中心</router-link>
        </MenuItem>
        <MenuItem
          name="member"
          class="header-page-menu"
          :class="{ active: $route.path.indexOf('/view/member') > -1 }"
        >
          <router-link to="/view/member">会员管理</router-link>
        </MenuItem>
        <MenuItem
          name="settings"
          class="header-page-menu"
          :class="{ active: $route.path.indexOf('/view/settings') > -1 }"
        >
          <router-link to="/view/settings">设置</router-link>
        </MenuItem>
      </Menu>

      <div class="bar-nav">
        <ul class="ivu-menu-horizontal">
          <li class="header-right">
            余额：{{
              (user.mktBalance > 0 ? user.mktBalance : 0)
                | numberThousandsSeparator
            }}条
            <router-link to="/view/recharge">充值</router-link>
          </li>
          <li class="header-right">
            软件到期：{{ (user.purchaseTime || 0) | purchaseDaysLeft }}天
            <router-link to="/view/order">续费</router-link>
          </li>
        </ul>

        <ManyStoresSwitch />
      </div>
    </header>

    <aside
      class="side-nav"
      v-show="
        !(
          $route.path.indexOf('/view/home') > -1 ||
          $route.path === '/view/' ||
          $route.path === '/view'
        )
      "
    >
      <Menu
        ref="sideMenu"
        mode="vertical"
        :active-name="active"
        :open-names="open"
        theme="light"
        width="auto"
      >
        <div v-show="$route.path.indexOf('/view/marketing') > -1">
          <MenuItem to="/view/marketing" name="marketing">
            <Icon type="md-document" />
            营销中心
          </MenuItem>
        </div>
        <div v-show="$route.path.indexOf('/view/member') > -1">
          <MenuItem to="/view/member" name="member">
            <Icon type="md-document" />
            会员列表
          </MenuItem>
        </div>
        <div v-show="$route.path.indexOf('/view/settings') > -1">
          <MenuItem to="/view/settings" name="settings">
            <Icon type="md-document" />
            系统设置
          </MenuItem>
          <MenuItem to="/view/settings/recharge" name="recharge">
            <Icon type="md-document" />
            充值
          </MenuItem>
          <MenuItem to="/view/settings/renewal" name="renewal">
            <Icon type="md-document" />
            软件续费
          </MenuItem>
        </div>
      </Menu>
    </aside>

    <div class="single-page">
      <!-- 当前页标题 -->
      <PageTitle :title="$route.meta.title" />

      <!-- 全局提示 -->
      <AlertSystem />

      <!-- 主体内容 >>> .content -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script type="text/babel">
import { Menu, Icon, MenuItem } from 'view-design';
import { mapState, mapGetters } from 'vuex';
import AlertSystem from './AlertSystem';
import ManyStoresSwitch from './ManyStoresSwitch';
import PageTitle from './common/page-title';

export default {
  name: 'Main',
  components: {
    Menu,
    Icon,
    MenuItem,
    AlertSystem,
    ManyStoresSwitch,
    PageTitle,
  },
  data() {
    return {
      active: '',
      open: [],
      openList: [
        '/view/home',
        '/view/marketing',
        '/view/member',
        '/view/settings',
      ],
    };
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['shop']),
    viewRouter() {
      return this.$route.path;
    },
  },
  watch: {
    viewRouter() {
      this._activeMenu();
      this.$nextTick(function() {
        // Code that will run only after the entire view has been re-rendered
        this._updateActiveMenu();
        // this._handlePageTitle();
      });
    },
  },
  created() {},
  mounted() {
    console.log('process.env :', process.env);
    console.log('process.env.NODE_ENV :', process.env.NODE_ENV);
    this._activeMenu();
    this.$nextTick(function() {
      this._updateActiveMenu();
      // this._handlePageTitle();
    });
  },
  updated() {},
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`

    next();
  },
  methods: {
    // 导航高亮
    _activeMenu(path = this.$route.path) {
      const arr = path.split('/');
      const name = arr[arr.length - 1];
      const defaultMenu = 'home';
      const defaultMenuList = ['', 'view', 'home'];
      this.active = defaultMenuList.includes(name) ? defaultMenu : name;

      for (const i of this.openList) {
        if (path.indexOf(i) > -1) {
          this.open = [i];
          break;
        }
      }
    },
    _updateActiveMenu() {
      this.$refs.sideMenu.updateOpened();
      this.$refs.sideMenu.updateActiveName();
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css//components/variables.styl';

.top-header
  position fixed
  left 0
  transition all .5s
  right 0
  top 0
  min-width 1030px
  height $headerHeight
  padding-right $margin
  box-shadow 2px 2px 2px #e4e4e4
  background $primary
  background linear-gradient(to right, #0060DD 0%, #4B1EBD 100%) !important
  color #fff !important
  z-index 9
  a
    color #fff
.logo
  line-height 60px
  position relative
  color #ffffff
  font-family 'microsoft yahei'
  font-size 24px
  &:hover
    text-decoration none
.header-page-menu
  a
    color: rgba(255, 255, 255, .8)
    font-weight bold
    /* 解决hover加粗宽度变化的抖动问题 */
    &:before
      display: block;
      content: attr(title);
      font-weight: bold;
      visibility: hidden;
      height: 1px;
      color: transparent;
      margin-bottom: -1px;
      overflow: hidden;
  &.ivu-menu-item
    background-color inherit
    padding 0
    a
      display inline-block
      padding 0 $margin
    &:hover
      background-color inherit
      a
        color: #fff
        font-weight bold
        &:after
          content: ''
          position absolute
          bottom 1px
          left 0
          width 100%
          height 2px
          border-bottom 2px solid #fff
    &.active
      & > a
        color #fff
        font-weight bold
        background-color inherit
        &:after
          content ''
          position absolute
          bottom 1px
          left 0
          width 100%
          height 2px
          border-bottom 2px solid #fff
.bar-nav
  float right

.ivu-menu-horizontal
  height $headerHeight !important
  line-height $headerHeight !important
  display inline-block
  vertical-align middle
  background initial
  color #fff

.header-right
  display inline-block
  border-width 0 !important
  &:first-of-type
    margin-right $margin
  &:last-of-type
    padding-right 0 !important

.rotate-aside-icon
  margin 20px 20px 0
  cursor pointer
  transform rotate(0deg)
  transition transform .5s
  &.rotate-icon
    transform rotate(90deg)

.side-nav
  position fixed
  top $headerHeight
  left 0
  bottom 0
  width $navWidth
  transition all .5s
  border-right 1px solid $gray-line
  padding-top 50px
  background-color #fff
  color $gray
  z-index 9
  overflow-y auto
  &::-webkit-scrollbar
    display none
  &
    -ms-overflow-style none
    overflow -moz-scrollbars-none


.single-page
  // min-height "calc(100vh - %s - %s)" % ($headerHeight $margin)
  margin-left $navWidth + $margin
  transition all .5s
  margin-right $margin
  margin-top $headerHeight + $margin
  &.isCollapsed
    margin-left $navWidthCollapsed + $margin
</style>

<style lang="stylus">
@import '~@/assets/css/components/variables.styl';

#main[data-router="/view/home"], #main[data-router="/view/home/"], #main[data-router="/view/"], #main[data-router="/view"]
  .single-page
    margin-left $margin
  .page-title-block
    display none !important
  .content
    padding: 0
    background-color: $body-bg
.top-header
  .ivu-menu-horizontal:after
    content none
.header-right .dropdown-menu-ul .ivu-dropdown-item-divided:before
  margin 0 !important
  top 0 !important
.side-nav
  .ivu-menu-submenu .ivu-menu
    .ivu-menu-item
      a
        padding-bottom 10px
        padding-top 10px
.alert-page
  margin-bottom $margin
.content
  padding 16px
  background-color #fff
  min-width 350px
.page-title-block
  margin -16px -16px $margin -16px
  padding 8px $margin
  background-color #fff
  .page-title
    font-weight bold
@media screen and (max-width: 1450px)
  .bar-nav
    display none
</style>
