import { createStore, StoreOptions } from 'vuex';

import { RootStateInterface, RootStoreModel } from '@/models/store';

import { initialRootState } from './initialState';

// import each Vuex module
import { itemsState } from '@/store/items/module';
import { localesState } from '@/store/locales/module';

// Vuex store options to build our modularized namespaced store
const storeOptions: StoreOptions<RootStateInterface> = {
  state: initialRootState,

  modules: {
    itemsState,
    localesState,
    // as you create additional modules, you'll add them here similar to the itemsState
  },
};

// Vuex Root store instance
export const rootStore: RootStoreModel<RootStateInterface> = createStore(
  storeOptions
) as any;

// Private helper to dispatch an action to a Vuex module from one place so we keep the string interpolation for `${moduleName}/${actionName}` in one place only and be able to dispatch action with less code in a strongly-type way
export function dispatchModuleAction<T>(
  moduleName: string,
  actionName: string,
  params?: T
): void {
  // rename store.dispatch here to rootStore.dispatch
  rootStore.dispatch(`${moduleName}/${actionName}`, params);
}
