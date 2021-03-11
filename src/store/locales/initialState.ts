import { LocalesStateInterface } from '@/models/store';

/**
 * @name initialItemsState
 * @description
 * The Items state instance with the initial default values
 */
export const initialLocalesState: LocalesStateInterface = {
  availableLocales: [
    {
      name: 'China',
      locale: 'zh-CN',
      flag: 'cn',
      selected: true, // this is selected by default
    },
    {
      name: 'USA',
      locale: 'en-US',
      flag: 'us',
      selected: false,
    },
    {
      name: 'Italy',
      locale: 'it-IT',
      flag: 'it',
      selected: false,
    },
    {
      name: 'Spain',
      locale: 'es-ES',
      flag: 'es',
      selected: false,
    },
    {
      name: 'France',
      locale: 'fr-FR',
      flag: 'fr',
      selected: false,
    },
    {
      name: 'Janpan',
      locale: 'ja-JP',
      flag: 'jp',
      selected: false,
    },
  ],
};
