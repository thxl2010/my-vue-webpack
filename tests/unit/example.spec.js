import Main from '@/components/Main.vue';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe('Main.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Main, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
