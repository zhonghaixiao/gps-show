<template>
  <div class="realtime-container">
    <img class="main-back" src="../assets/brige1.jpg">
    <div class="table-container">
      <Table class="table-content" height="460" :columns="columns1" :data="data1"></Table>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        columns1: [
          {
            title: '测点编号',
            key: 'id'
          },
          {
            title: '传感器类型',
            key: 'sensorType'
          },
          {
            title: '测点类型',
            key: 'locationType'
          },
          {
            title: '是否基准点',
            key: 'isBase',
          },
          {
            title: '报警状态',
            key: 'status'
          },
          {
            title: '测量值',
            key: 'value'
          }
        ],
        data1: [
          {
            id: 'C1',
            sensorType: '温度',
            locationType: '1',
            isBase: '否',
            status: '正常',
            value: '218.64'
          },
          {
            id: 'C1',
            sensorType: '温度',
            locationType: '1',
            isBase: '否',
            status: '正常',
            value: '218.64'
          },
          {
            id: 'C1',
            sensorType: '温度',
            locationType: '1',
            isBase: '否',
            status: '正常',
            value: '218.64'
          },{
            id: 'C1',
            sensorType: '温度',
            locationType: '1',
            isBase: '否',
            status: '正常',
            value: '218.64'
          },
          {
            id: 'C1',
            sensorType: '温度',
            locationType: '1',
            isBase: '否',
            status: '正常',
            value: '218.64'
          },
          {
            id: 'C1',
            sensorType: '温度',
            locationType: '1',
            isBase: '否',
            status: '正常',
            value: '218.64'
          },
          {
            id: 'C1',
            sensorType: '温度',
            locationType: '1',
            isBase: '否',
            status: '正常',
            value: '218.64'
          },
          {
            id: 'C1',
            sensorType: '温度',
            locationType: '1',
            isBase: '否',
            status: '正常',
            value: '218.64'
          },
          {
            id: 'C1',
            sensorType: '温度',
            locationType: '1',
            isBase: '否',
            status: '正常',
            value: '218.64'
          },
          {
            id: 'C1',
            sensorType: '温度',
            locationType: '1',
            isBase: '否',
            status: '正常',
            value: '218.64'
          },
          {
            id: 'C1',
            sensorType: '温度',
            locationType: '1',
            isBase: '否',
            status: '正常',
            value: '218.64'
          },
          {
            id: 'C1',
            sensorType: '温度',
            locationType: '1',
            isBase: '否',
            status: '正常',
            value: '218.64'
          },
          {
            id: 'C1',
            sensorType: '温度',
            locationType: '1',
            isBase: '否',
            status: '正常',
            value: '218.64'
          }

        ]
      }
    },
    computed:{

    },
    methods:{
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .realtime-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    height: 100%;
    .main-back{
      margin-top: 20px;
      width: 90%;
      min-width: 800px;
    }
    .table-container{
      width: 90%;
      margin-top: 20px;
      margin-bottom: 20px;
      overflow-y: scroll;
      .table-content{
        width: 100%;
        &::-webkit-scrollbar{
          display: none;
        }
      }
      &::-webkit-scrollbar{
        display: none;
      }
    }

    &::-webkit-scrollbar{
      display: none;
    }
  }
</style>
