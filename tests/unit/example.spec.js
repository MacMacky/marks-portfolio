import Vuetify from 'vuetify';
import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import CardSkill from '@/components/CardSkill.vue';
import SideBarItem from '@/components/SideBarItem.vue';




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



describe('SideBarItem.vue', () => {
  let wrapper;
  let localVue;
  beforeAll(() => {
    localVue = createLocalVue();
    localVue.use(Vuetify, {});
    wrapper = shallowMount(SideBarItem, {
      localVue,
      stubs: {
        'v-list-tile': true,
        'v-list-tile-content': true,
        'v-list-tile-title ': true,
        'v-icon': true
      },
      propsData: {
        to: '#some-id',
        label: 'section',
        icon: 'place'
      }
    })
  })



  it('should have a root wrapper of "SideBarItem"', () => {
    expect(wrapper.is(SideBarItem)).toBeTruthy();
  })

  it('should have a wrapper with a name of "SideBarItem"', () => {
    expect(wrapper.name()).toBe('SideBarItem')
  })


  it('should have a prop of "to" with a value of "#some-id"', () => {
    expect(wrapper.props().to).toBe('#some-id');
  });


  it('should have a prop of "label" with a value of "section"', () => {
    expect(wrapper.props().label).toBe('section');
  });


  it('should have a prop of "icon" with a value of "place"', () => {

    expect(wrapper.props().icon).toBe('place');
  });


  it('should have a child component of "v-list-tile-stub"', () => {
    expect(wrapper.find('v-list-tile-stub').exists()).toBeTruthy();
  });


  it('should have class of "text-xs-center" for component "v-list-tile-title"', () => {
    expect(wrapper.find('v-list-tile-title-stub').classes()).toContain('text-xs-center')
  });


  it('should have class of "title" for component "v-list-tile-title"', () => {
    expect(wrapper.find('v-list-tile-title-stub').classes()).toContain('title')
  });


  it('should have text of "place" for component "v-icon"', () => {
    expect(wrapper.find('v-icon-stub').text()).toBe('place')
  });



  it('should have an atrribute of "href" with a value of "#some-id"', () => {
    expect(wrapper.find('v-list-tile-stub').attributes('href')).toBe('#some-id');
  })


});
