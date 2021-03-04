<template>
  <div>
    <h3>Items - loading: {{ loading }}</h3>
    <Loader v-show="loading" />
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
import Item from '@/components/items/children/Item.component.vue';
import Loader from '@/components/shared/Loader.vue';
import { ItemInterface } from '@/models/items/Item.interface';

export default defineComponent({
  components: {
    Item,
    Loader,
  },
  props: {
    items: {
      // type: Array as PropType<any[]>,
      // ! Data Model Interfaces
      type: Array as PropType<ItemInterface[]>,
    },
    loading: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const handleItemSelect = (item: ItemInterface) => {
      console.log('handleItemSelect :', item, item.selected);
      emit('selectItem', item);
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
