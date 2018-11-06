<template>
  <div id="app" class="main-container" ref="body">
    <div class="left-container">
      <nav-menu
        :menu-list="menu"
        :init-index="currentPage"
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
        routerLinks: ['/index', '/realtime-gps', '/analyze-gps', '/history-gps']
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
    computed: {
      currentPage(){
        for (let j = 0; j < this.routerLinks.length; j++) {
          if (this.routerLinks[j] === this.$route.path){
            return j;
          }
        }
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
