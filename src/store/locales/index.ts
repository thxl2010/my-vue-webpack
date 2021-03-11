import { rootStore, dispatchModuleAction } from '../root';
import { StoreModuleNames, LocalesStateInterface } from '@/models/store';
// import { LocalStorageKeys } from '@/models/local-storage/LocalStorageKeys';

/**
 * @name localesStore
 * @description
 * The locales store wrapper that returns the localesState and exposes a generic action<T> method
 */
const localesStore = {
  get state(): LocalesStateInterface {
    return rootStore.state.localesState;
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.localesState, actionName, params);
  },
};

// export our wrapper using the composition API convention (i.e. useXYZ)
export const useLocalesStore = () => {
  return localesStore;
};
