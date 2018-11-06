<template>
  <div class="chart-container" ref="body">
    <div ref="chart" class="chart">

    </div>
  </div>
</template>

<script>
  export default {
    name: "TestEcharts",
    data(){
      return {
        gpsData: [],
        myChart: {},
        firstData:[],
        isFirst: true
      };
    },
    created: {

    },
    sockets: {
      connect: function () {
        console.log('socket connected');
      },
      gps: function (val) {
        console.log('接收到服务端消息', JSON.parse(val));
        let temp = JSON.parse(val);
        if (this.isFirst){
          this.isFirst = false;
          this.firstData.push(...temp);
        }
        if (this.gpsData.length === 30) {
          this.gpsData.length = 0;
        }
        this.gpsData.push([temp[0]-this.firstData[0], temp[1]-this.firstData[1]]);
        this.refreshData();
      }
    },
    mounted() {
      this.$refs.body.style.height = window.innerHeight + 'px';
      this.myChart = this.$echarts.init(this.$refs.chart);
    },
    methods: {
      refreshData(){
        this.myChart.setOption({
          xAxis: {},
          yAxis: {},
          series: [{
            symbolSize: 20,
            data: this.gpsData,
            type: 'scatter'
          }]
        });
      }
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
