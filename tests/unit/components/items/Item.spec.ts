import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Item from '@/components/items/children/Item.vue';
import { ItemInterface } from '@/models/items/Item.interface';

describe('Item.vue', () => {
  it('renders an Item correctly', () => {
    const model: ItemInterface = {
      id: 1,
      name: '哈哈',
      selected: false,
    };

    const wrapper = shallowMount(Item, {
      props: {
        model,
      },
    });

    expect(wrapper.text()).to.include('哈哈');
    const domEl = wrapper.find('div.name');
    expect(domEl.text()).to.equal('哈哈');
  });

  it('has expected css class when selected is false', () => {
    const model: ItemInterface = {
      id: 2,
      name: 'Unit test item 2',
      selected: false,
    };

    const wrapper = shallowMount(Item, {
      props: {
        model: model,
      },
    });

    // check component css classes list
    const classes = wrapper.classes();
    expect(classes)
      .to.be.an('array')
      .that.includes('item');
    expect(classes)
      .to.be.an('array')
      .that.does.not.includes('selected');
  });

  it('has selected css class when selected is true', () => {
    const model: ItemInterface = {
      id: 3,
      name: 'Unit test item 3',
      selected: true /* setting selected = true here */,
    };

    const wrapper = shallowMount(Item, {
      props: {
        model: model,
      },
    });

    // check component css classes list
    const classes = wrapper.classes();
    expect(classes)
      .to.be.an('array')
      .that.includes('item');

    expect(classes)
      .to.be.an('array')
      .that.includes('selected');
  });
});
