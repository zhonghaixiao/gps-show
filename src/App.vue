<template>
  <div id="app" class="main-container" ref="body">
    <nav-menu></nav-menu>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      menu:['主页','GPS监测','GPS分析','GPS历史数据'],
      routerNames:['index','realtime-gps','analyze-gps','history-gps'],
      currentPage: 0
    }
  },
  mounted(){
    this.$refs.body.style.height = window.innerHeight + 'px';
  },
  methods:{

  }
}
</script>

<style scoped lang="less">

</style>
