import Vuetify from 'vuetify';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import CardSkill from '@/components/CardSkill.vue';




describe('CardSkill.vue', () => {
  let wrapper;
  let localVue;
  beforeAll(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify, {});
    wrapper = shallowMount(CardSkill, {
      localVue,
      stubs: {
        'v-card-text': true,
        'v-card-title': true
      },
      propsData: {
        title: 'okiniawa',
        color: 'green',
        isRipple: false
      }
    })

  })

  it('return the prop wrapper to be "CardSkill"', () => {
    expect(wrapper.is(CardSkill)).toBeTruthy();
  });
  it('return the prop "title" with a value of "okiniawa"', () => {
    expect(wrapper.props('title')).toBe('okiniawa');
  });
  it('return the prop "color" with a value of "green"', () => {
    expect(wrapper.props('color')).toBe('green');
  });
  it('return the prop "isRipple" with a value of false', () => {
    expect(wrapper.props('isRipple')).toBeFalsy();
  });
  it('return the text with a value of "okiniawa"', () => {
    expect(wrapper.text()).toBe("okiniawa");
  });
  it('should have a attribute of "color"', () => {
    expect(wrapper.attributes('color')).toBeTruthy();
  });
  it('should have not a attribute of "class"', () => {
    expect(wrapper.attributes('class')).toBeFalsy();
  });
  it('child component "v-card-title-sub" should have a class of "headline"', () => {
    expect(wrapper.find('v-card-title-stub').classes()).toContain('headline')
  });
  it('child component "v-card-text-sub" should have a class of "text-xs-center"', () => {
    expect(wrapper.find('v-card-text-stub').classes()).toContain('text-xs-center')
  });

});
