import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n';

interface LocalesDataInterface {
  messages: LocaleMessages<VueMessageType>;
}

/**
 * @name: getLocalesData
 * @description: Helper to load the locale json files …
 */
const getLocalesData = (): LocalesDataInterface => {
  // use require.context to get all the .json files …
  const files = (require as any).context(
    './locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  console.log('locales files :', files);
  // create the instance that will hold the loaded data
  const localeData: LocalesDataInterface = {
    messages: {},
  };
  // loop through all the files
  const keys: string[] = files.keys();
  keys.forEach((key: string) => {
    // extract name without extension
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const localeId = matched[1];
      // from each file, set the related messages property
      localeData.messages[localeId] = files(key).messages;
    }
  });

  return localeData;
};

// create our data dynamically by loading the JSON files through our getLocalesData helper
const data: LocalesDataInterface = getLocalesData();
console.log('getLocalesData() :', getLocalesData());

export const i18n = createI18n({
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  messages: data.messages,
});
