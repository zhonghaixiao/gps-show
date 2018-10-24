<template>
  <div class="chart-container" ref="body">
    <div id="chart" class="chart">

    </div>
  </div>
</template>

<script>
  export default {
    name: "TestEcharts",
    created: {

    },
    mounted() {
      this.$refs.body.style.height = window.innerHeight + 'px';
      let myChart = this.$echarts.init(document.getElementById('chart'));
      myChart.setOption({
        xAxis: {},
        yAxis: {},
        series: [{
          symbolSize: 20,
          data: [
            [-10.0, -8.04],
            [8.0, 6.95],
            [-13.0, -7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, -4.26],
            [12.0, 10.84],
            [-7.0, 4.82],
            [5.0, 5.68],
            [-1, -5],
            [-0.2, -0.4],
            [-1, 3]
          ],
          type: 'scatter'
        }]
      });
    }
  }
</script>

<style scoped lang="less">

  .chart-container{
    display: flex;
    justify-content: center;
    align-items: center;
    .chart{
      width: 100%;
      height: 100%;
    }
  }

</style>
