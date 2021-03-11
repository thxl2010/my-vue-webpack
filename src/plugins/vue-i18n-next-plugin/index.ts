import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n';

interface LocalesDataInterface {
  messages: LocaleMessages<VueMessageType>;
}

const data: LocalesDataInterface = {
  messages: {
    'zh-CN': {
      welcome: '欢迎：这个信息是以中文本地化的',
    },
    'en-US': {
      welcome: 'Welcome: this message is localized in English',
      msg: 'hello',
      named: '{msg} world!',
      list: '{0} world!',
      literal: "{'hello'} world!",
      the_world: 'the world',
      dio: 'DIO:',
      linked: '@:dio @:the_world !!!!',
    },
    'it-IT': {
      welcome: 'Benvenuti: this message is localized in Italian',
    },
    'fr-FR': {
      welcome: 'Bienvenue: this message is localized in French',
    },
    'es-ES': {
      welcome: 'Bienvenido: this message is localized in Spanish',
    },
    'ja-JP': {
      msg: 'こんにちは',
      named: '{msg} 世界！',
      list: '{0} 世界！',
      literal: "{'こんにちは'} 世界！",
      the_world: 'ザ・ワールド！',
      dio: 'ディオ:',
      linked: '@:dio @:the_world ！！！！',
    },
  },
};

export const i18n = createI18n({
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  messages: data.messages,
});
