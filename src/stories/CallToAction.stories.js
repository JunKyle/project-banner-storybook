import CallToAction from '../components/CallToAction.vue';

export default {
  title: 'CallToAction',
  component: CallToAction,
  argTypes: {
    backgroundColor: { control: 
      { type: 'color', 
        presetColors: ['#0009e5', '#e60029']
      } 
    },
    color: { control: 
      { type: 'color', 
        presetColors: ['#000000', '#FFFFFF']
      } 
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CallToAction },
  template: '<call-to-action v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'bouton défault',
};

export const Colored = Template.bind({});
Colored.args = {
  label: 'bouton coloré',
  color: '#FFFFFF',
  backgroundColor: '#e60029'
};
