<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["data"],
  mounted() {
    // reformat in the way the lib wants
    let chartData = {
      labels: ['Jun','Jul','Aug','Sep','Oct','Nov'],
      datasets: [
        {
          backgroundColor: "#FFD200",
          data: [5000,2000,5000,4000,12000,8500],
          borderColor : '#FFD200',
          fill : false
        }
      ]
    };



    this.renderChart(chartData, {
        responsive: true,
        maintainAspectRatio: false,
        legend : {
            display : false
        },
        scales : {
            yAxes : [{
                ticks : {
                    display : false
                }
            }]
        }
    });
  }
};
</script>