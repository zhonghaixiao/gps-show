<template>
  <div id="app" class="main-container" ref="body">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        menu:['主页','GPS监测','GPS分析','GPS历史数据'],
        routerNames:['index','realtime-gps','analyze-gps','history-gps'],
        routerLinks: ['/index', '/realtime-gps', '/analyze-gps', '/history-gps']
      }
    },
    methods:{

    },
    computed: {

    }
  }
</script>

<style scoped lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  .main-container{
    display: flex;
    width: 100%;
  }
</style>
