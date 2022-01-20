import Chart from '../components/modules/Chart.vue';

export default {
  title: 'Example/Chart',
  component: Chart,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
  },
};

const Template = (args) => ({
  components: { Chart },
  setup() {
    return { args };
  },
  template: '<Chart v-bind="args" />',
});

export const pieChart = Template.bind({});
pieChart.args = {
  chartData: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  }
};
