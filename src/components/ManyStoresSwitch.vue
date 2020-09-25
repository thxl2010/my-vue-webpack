<template>
  <Menu mode="horizontal">
    <MenuItem name="user" class="header-right">
      <Dropdown
        placement="bottom-end"
        trigger="custom"
        :visible="visible"
        @mouseenter.native="handleMouseEnter"
        @mouseleave.native="handleMouseLeave"
        @on-visible-change="handleVisibleChange"
      >
        <a
          href="javascript:void(0)"
          :title="user.username || '--' | subTaobao"
          class="account-user"
        >
          <Icon type="md-people" size="18" />
          <span class="account-user-name">{{
            user.username || '--' | subTaobao
          }}</span>
          <Icon type="md-arrow-dropdown"></Icon>
        </a>
        <DropdownMenu slot="list" class="dropdown-menu-ul">
          <DropdownItem class="master">
            <div>
              <Icon type="md-people" size="18" />
              <span class="account-user-name">{{
                master.username || '--' | subTaobao
              }}</span>
            </div>
          </DropdownItem>
          <DropdownItem v-if="user.userId === user.masterUserId">
            <router-link :to="{ name: 'Settings' }">
              <Icon type="md-settings" size="18" />
              <span>&nbsp;多店铺设置</span>
            </router-link>
          </DropdownItem>
          <DropdownItem class="management-shop-container">
            <div>
              <Icon
                type="ios-add-circle"
                size="18"
                v-show="!show"
                @click="show = true"
              />
              <Icon
                type="ios-remove-circle"
                size="18"
                v-show="show"
                @click="show = false"
              />
              <span>&nbsp;可管理店铺</span>
              <ul
                :style="{
                  height: `${slideDownHeight}px`,
                  maxHeight: show ? `${slideDownHeight}px` : 0,
                }"
                :class="['management-shop-list', { show: show }]"
              >
                <template
                  v-if="managementShopList && managementShopList.length"
                >
                  <li
                    v-for="(item, i) in managementShopList"
                    :key="item.id"
                    :class="{
                      active: item.userId === user.id,
                      last: i === managementShopList.length - 1,
                    }"
                    @click="switchLogin(item)"
                  >
                    {{ item.username | subTaobao }}
                  </li>
                </template>
                <template v-else>
                  <li class="last">无可管理店铺</li>
                </template>
              </ul>
            </div>
          </DropdownItem>
          <DropdownItem divided title="退出软件">
            <a href="/logout" @click="_logout">退出软件</a>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </MenuItem>
  </Menu>
</template>

<script type="text/babel">
import {
  Menu,
  Icon,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from 'view-design';

import { mapState, mapGetters } from 'vuex';
import Cookies from 'js-cookie';
import API from '@/assets/js/api';
import * as types from '../store/types';

export default {
  name: 'ManyStoresSwitch',
  components: {
    Menu,
    Icon,
    MenuItem,
    Dropdown,
    DropdownMenu,
    DropdownItem,
  },
  props: {},
  data() {
    return {
      visible: false,
      show: true,
      initialized: false,
    };
  },
  computed: {
    ...mapState(['user', 'master', 'shopList']),
    ...mapGetters(['shop']),
    managementShopList() {
      return this.shopList.filter((item) => item.status !== 0);
    },
    slideDownHeight() {
      return (this.managementShopList.length || 1) * 25;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleMouseEnter() {
      this.visible = true;
    },
    handleMouseLeave() {
      this.visible = false;
    },
    handleVisibleChange(visible) {
      if (visible && !this.initialized) {
        this.$store.dispatch('getShopList').then(() => {
          this.initialized = true;
        });
      }
    },
    switchLogin(item) {
      const userId = item.userId ? item.userId : item.delegator;
      if (userId === this.user.userId) {
        this.$Message.warning('账号已登录，请勿重复登录！');
        return;
      }

      let apiMethod;
      const param = {};
      if (item.userId) {
        apiMethod = 'switchLogin';
      } else {
        apiMethod = 'checkBeforeLogin';
        param.delegator = item.delegator;
      }
      API[apiMethod](param)
        .then((result) => {
          window.location.href = result.destUrl;
        })
        .catch((err) => {
          this.$catchError(err);
        });
    },
    _logout() {
      Cookies.remove('HELLO_WORLD_id');
      this.$store.commit(types.LOGOUT);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css//components/variables.styl';

.account-user
  color #fff
.account-user-name
  margin-right 26px
  margin-left 8px

.dropdown-menu-ul
  text-align left !important
  .ivu-dropdown-item
    padding 0 !important
    & > a, & > div
      display: block
      padding: 7px 16px
    a
      color $gray
      &:hover
        color $gray
    &.master, .active
      color $orange1
  li
    span
      display inline-block
      line-height 18px
.management-shop-list
  margin-top 6px
  height 25px
  max-height 0
  overflow hidden
  transition all .5s
  display block
  &.show
    max-height 25px

  li
    background-image url("~@/assets/img/pic-dashed-line.png")
    background-repeat: no-repeat;
    background-position: 8px -1px;
    padding-left: 30px
    padding-right: 12px
    line-height 1.8
    &:hover
      background-color $gray2
    &.last
      background-position: 8px -14px;
.management-shop-container
  &:hover
    background-color #fff
</style>

<style lang="stylus">
.header-right
  .ivu-select-dropdown
    top 58px !important
</style>
