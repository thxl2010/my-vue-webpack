import { createStore, StoreOptions } from 'vuex';

import {
  RootStateInterface,
  RootStoreInterface,
  RootStoreModel,
} from '@/models/store';

import { initialRootState } from './initialState';

// import each Vuex module
import { itemsState } from '@/store/items';

// Vuex store options to build our modularized namespaced store
const storeOptions: StoreOptions<RootStateInterface> = {
  state: initialRootState,

  modules: {
    itemsState,
    // as you create additional modules, you'lla dd them here similar to the itemsState
  },
};

// Vuex Root store instance
export const store: RootStoreModel<RootStateInterface> = createStore(
  storeOptions
) as any;
