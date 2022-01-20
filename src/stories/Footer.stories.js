import Footer from '../components/modules/Footer.vue';

export default {
  title: 'Example/Footer',
  component: Footer,
};

const Template = (args) => ({
  components: { Footer },
  setup() {
    return { ...args };
  },
  template: '<Footer v-bind="args" />',
});

export const FooterMain = Template.bind({});
FooterMain.args = {
  user: {},
};
