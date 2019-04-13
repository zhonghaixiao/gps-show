<template>
  <div class="analyze-container">
    <img class="main-back" src="../assets/brige1.jpg">
    <div class="main-container">
      <div class="chart1" ref="chart11"></div>
      <div class="chart2" ref="chart22"></div>
    </div>
    <div class="main-container">
      <div class="chart1" ref="chart12"></div>
      <div class="chart2" ref="chart21"></div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'hello',
    data () {
      return {
        chart11: {},
        chart12: {},
        option1: {
          title: {
            text: '堆叠区域图'
          },
          tooltip : {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['周一','周二','周三','周四','周五','周六','周日']
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'邮件营销',
              type:'line',
              stack: '总量',
              areaStyle: {},
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'联盟广告',
              type:'line',
              stack: '总量',
              areaStyle: {},
              data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
              name:'视频广告',
              type:'line',
              stack: '总量',
              areaStyle: {},
              data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
              name:'直接访问',
              type:'line',
              stack: '总量',
              areaStyle: {normal: {}},
              data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
              name:'搜索引擎',
              type:'line',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              areaStyle: {normal: {}},
              data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        },
        option2: {
          title: {
            text: '基础雷达图'
          },
          tooltip: {},
          legend: {
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
          },
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
              }
            },
            indicator: [
              { name: '销售（sales）', max: 6500},
              { name: '管理（Administration）', max: 16000},
              { name: '信息技术（Information Techology）', max: 30000},
              { name: '客服（Customer Support）', max: 38000},
              { name: '研发（Development）', max: 52000},
              { name: '市场（Marketing）', max: 25000}
            ]
          },
          series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
              {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '预算分配（Allocated Budget）'
              },
              {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '实际开销（Actual Spending）'
              }
            ]
          }]
        }
      }
    },
    mounted () {
      this.chart11 = this.$echarts.init(this.$refs.chart11);
      this.chart12 = this.$echarts.init(this.$refs.chart12);
      this.chart11.setOption(this.option1, true);
      this.chart12.setOption(this.option1, true);
      this.chart21 = this.$echarts.init(this.$refs.chart21);
      this.chart22 = this.$echarts.init(this.$refs.chart22);
      this.chart21.setOption(this.option2, true);
      this.chart22.setOption(this.option2, true);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .analyze-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    height: 100%;
    .chart1{
      margin-top: 20px;
      width: 49%;
      height: 350px;
    }
    .chart2{
      margin-top: 20px;
      width: 49%;
      height: 350px;
    }
    .main-back{
      margin-top: 20px;
      width: 90%;
      min-width: 800px;
    }
    .main-container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin-top: 20px;
      &::-webkit-scrollbar{
        display: none;
      }
    }
    &::-webkit-scrollbar{
      display: none;
    }
    padding-bottom: 20px;
  }


</style>
