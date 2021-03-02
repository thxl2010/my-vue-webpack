<template>
  <h3>vue@3 & TypeScript ：</h3>
  <ItemList :items="items" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemList from '@/components/items/ItemList.vue';

export default defineComponent({
  components: {
    ItemList,
  },
  setup() {
    const items: any[] = [
      {
        id: '1',
        name: 'DU',
      },
      {
        id: '2',
        name: 'Li',
      },
      {
        id: '3',
        name: 'Chen',
      },
    ];

    return {
      items,
    };
  },
});
</script>

<style></style>
