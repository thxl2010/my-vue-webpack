<template>
  <div>
    <h3>Items:</h3>
    <ul>
      <Item
        v-for="item in items"
        :key="item.id"
        :model="item"
        @select="handleItemSelect"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Item from '@/components/items/children/Item.vue';
import { ItemInterface } from '@/models/items/Item.interface';

export default defineComponent({
  components: {
    Item,
  },
  props: {
    items: {
      // type: Array as PropType<any[]>,
      // ! Data Model Interfaces
      type: Array as PropType<ItemInterface[]>,
    },
  },
  setup() {
    const handleItemSelect = (item: ItemInterface) => {
      item.selected = !item.selected;
      console.log('handleItemSelect :', item, item.selected);
    };

    return {
      handleItemSelect,
    };
  },
});
</script>

<style>
ul {
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}
</style>
