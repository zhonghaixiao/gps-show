<template>
  <div id="app" class="main-container" ref="body">
    <div class="left-container">
      <nav-menu
        :menu-list="menu"
        @onMenuChange="selectMenuItem"
        class="nav-menu"
      ></nav-menu>
    </div>
    <div class="right-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import NavMenu from './components/NavMenu';

  export default {
    name: 'App',
    data(){
      return {
        menu:['主页','GPS监测','GPS分析','GPS历史数据'],
        routerNames:['index','realtime-gps','analyze-gps','history-gps'],
        routerLinks: ['/index', '/realtime-gps', '/analyze-gps', '/history-gps'],
        currentPage: 0
      }
    },
    mounted(){
      this.$refs.body.style.height = window.innerHeight + 'px';
    },
    methods:{
      selectMenuItem(index){
        this.$router.push({path: this.routerLinks[index]});
      }
    },
    components: {
      NavMenu
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
    .left-container{
      width: 180px;
      display: flex;
      justify-content: center;
      .nav-menu{
        width: 100%;
        padding-top: 30px;
      }
    }
    .right-container{
      flex: 1;
      padding-left: 20px;
    }
  }
</style>
