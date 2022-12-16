import Picto from './Picto.vue';

export default {
  title: 'Picto',
  component: Picto,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['fa-location-dot', 'fa-video-camera'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Picto },
  template: '<picto v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
};

export const PictoMap = Template.bind({});
PictoMap.args = {
  icon: 'fa-location-dot',
};

export const PictoVideo = Template.bind({});
PictoVideo.args = {
  icon: 'fa-video-camera',
};

export const PictoMapPurple = Template.bind({});
PictoMapPurple.args = {
  purple: true
};

export const PictoVideoPurple = Template.bind({});
PictoVideoPurple.args = {
  icon: 'fa-video-camera',
  purple: true
};
