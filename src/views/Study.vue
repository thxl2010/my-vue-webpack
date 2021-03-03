<template>
  <h3>vue@3 & TypeScript ：</h3>
  <ItemList :items="items" />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ItemList from '@/components/items/ItemList.vue';
import { ItemInterface } from '@/models/items/Item.interface';

export default defineComponent({
  components: {
    ItemList,
  },
  setup() {
    // const items: any[] = [
    const items: ItemInterface[] = reactive([
      {
        id: '1',
        name: 'DU',
        selected: false,
      },
      {
        id: '2',
        name: 'Li',
        selected: false,
      },
      {
        id: '3',
        name: 'Chen',
        selected: false,
      },
    ]);

    return {
      items,
    };
  },
});
</script>

<style></style>
