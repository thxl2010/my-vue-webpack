<template>
  <h2>{{ i18n.t('welcome') }}</h2>
  <LocaleSelector
    :availableLocales="availableLocales"
    @clicked="onLocaleClicked"
  />
  <div id="nav">
    <router-link to="/">{{ i18n.t('navigation.home') }}</router-link> |
    <router-link to="/about">{{ i18n.t('navigation.about') }}</router-link> |
    <router-link to="/study">{{ i18n.t('navigation.study') }}</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { MutationType } from '@/models/store';
import { useLocalesStore } from '@/store/locales';
import { LocaleInfoInterface } from '@/models/localization/LocaleInfo.interface';
import LocaleSelector from '@/components/locale-selector/LocaleSelector.vue';

export default defineComponent({
  name: 'App',
  components: {
    LocaleSelector,
  },
  setup() {
    const i18n = useI18n();
    console.log('i18n :', i18n);
    const localesStore = useLocalesStore();

    const availableLocales = computed(() => {
      return localesStore.state.availableLocales;
    });

    const onLocaleClicked = (localeInfo: LocaleInfoInterface) => {
      localesStore.action(MutationType.locales.selectLocale, localeInfo.locale);
    };

    return {
      i18n,
      availableLocales,
      onLocaleClicked,
    };
  },
});
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
