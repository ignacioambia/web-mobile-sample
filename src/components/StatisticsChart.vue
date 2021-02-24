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
          data: [5000,2000,5500,4000,12000,8500],
          borderColor : '#FFD200',
          backgroundColor : 'rgba(255, 210, 0, 0.1)'
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