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
  },
};

export const i18n = createI18n({
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  messages: data.messages,
});
