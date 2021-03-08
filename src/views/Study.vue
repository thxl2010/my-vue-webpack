<template>
  <h3>vue@3 & TypeScript ：</h3>
  <ItemList :items="items" :loading="loading" @selectItem="onSelectItem" />
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import ItemList from '@/components/items/ItemList.vue';
import { ItemInterface } from '@/models/items/Item.interface';
import { useItemsStore } from '@/store/items';
import { MutationType } from '@/models/store';

export default defineComponent({
  name: 'Study',
  components: {
    ItemList,
  },
  setup() {
    // 计算属性
    // store
    const itemsStore = useItemsStore();
    const items = computed(() => {
      return itemsStore.state.items;
    });
    const loading = computed(() => {
      return itemsStore.state.loading;
    });

    // 生命周期钩子
    onMounted(() => {
      itemsStore.action(MutationType.items.loadItems);
    });

    const onSelectItem = (item: ItemInterface) => {
      itemsStore.action(MutationType.items.selectItem, {
        id: item.id,
        selected: !item.selected,
      });
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
