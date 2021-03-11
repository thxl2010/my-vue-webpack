// group our constants in a namespace
import { ItemsMutationType } from '../items/ItemsMutationType';
import { LocalesMutationType } from '../locales/LocalesMutationType';

export namespace MutationType {
  export const items = ItemsMutationType;
  export const locales = LocalesMutationType;
  // as you add new state modules, add additional exports here following the same convention;
}
