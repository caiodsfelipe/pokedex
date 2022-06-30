<template>
  <div class="card mt-3 card-stats">
    <div class="row g-0">
      <canvas id="myChart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

let myChart;
myChart;

export default {
  props: {
    stats: {
      required: true,
    },
  },

  setup() {
    let atualizarGrafico = (stats) => {
      const ctx = document.getElementById("myChart");
      const data = {
        labels: [
          stats[0].stat.name,
          stats[1].stat.name,
          stats[2].stat.name,
          stats[3].stat.name,
          stats[4].stat.name,
          stats[5].stat.name,
        ],
        datasets: [
          {
            label: "Estatísticas",
            data: [
              stats[0].base_stat,
              stats[1].base_stat,
              stats[2].base_stat,
              stats[3].base_stat,
              stats[4].base_stat,
              stats[5].base_stat,
            ],
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };

      myChart = new Chart(ctx, {
        type: "bar",
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };

    return { atualizarGrafico };
  },

  mounted() {
    this.atualizarGrafico(this.stats);
  },

  beforeUpdate() {
    myChart.destroy();
    this.atualizarGrafico(this.stats);
  },
};
</script>

<style scoped></style>
