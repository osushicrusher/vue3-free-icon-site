<script lang="ts">
import { Chart, ChartData, registerables } from "chart.js";
import { defineComponent } from "vue";
import { PieChart, LineChart } from "vue-chart-3";

// 使用するモジュールの宣言
// ここでは便宜上、全てのモジュールを使用する registerables を使用しているが、
// 必要十分なモジュールのみを宣言することで、ツリーシェイキングを行うことができる
Chart.register(...registerables);

export default defineComponent({
  components: {
    PieChart,
    LineChart,
  },
  setup() {
    // PieChart 用のデータ
    const pieData: ChartData<"pie"> = {
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
    };

    // LineChart 用のデータ
    const lineData: ChartData<"line"> = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    return { pieData, lineData };
  },
});
</script>

<template>
  <div class="wrapper">
    <PieChart :chartData="pieData" />
    <LineChart :chartData="lineData" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}
</style>