<template>
  <h3>vue@3 & TypeScript ：</h3>
  <ItemList :items="items" :loading="loading" @selectItem="onSelectItem" />
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from 'vue';
import ItemList from '@/components/items/ItemList.vue';
import { ItemInterface } from '@/models/items/Item.interface';
import { store } from '@/store';
import { MutationType, StoreModuleNames } from '@/models/store';

export default defineComponent({
  name: 'Study',
  components: {
    ItemList,
  },
  setup() {
    // 计算属性
    // store
    const items = computed(() => {
      return store.state.itemsState.items;
    });
    const loading = computed(() => {
      return store.state.itemsState.loading;
    });

    // 生命周期钩子
    onMounted(() => {
      store.dispatch(
        `${StoreModuleNames.itemsState}/${MutationType.items.loadItems}`
      );
    });

    const onSelectItem = (item: ItemInterface) => {
      store.dispatch(
        `${StoreModuleNames.itemsState}/${MutationType.items.selectItem}`,
        {
          id: item.id,
          selected: !item.selected,
        }
      );
    };

    return {
      items,
      loading,
      onSelectItem,
    };
  },
});
</script>

<style></style>
