<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div id="app">
    <div class="left-menu">
      <ul class="nav-ul">
        <li class="nav-item"
            v-for="(item, index) in menu"
            v-bind:class="isSelected(index)"
            @click="jumpToSelectedPage(index)">{{item}}</li>
      </ul>
    </div>
    <div class="main">
      <router-view />
    </div>
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
  methods:{
    isSelected: function(index){
      return (index == this.currentPage ? "active" : "");
    },
    jumpToSelectedPage: function(index){
      this.currentPage = index;
      console.log("index : " + index)
      this.$router.push({path:this.routerNames[index]})
    }
  }
}
</script>

<style>
  *{
    margin:0px;
    padding:0px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height:41rem;
  display:flex;
}
  .left-menu{
    width: 12rem;
    height: 100%;
    background-color: #2c3e50;
    margin: 4px 0px 4px 4px;
    color: white;
  }

  .main{
    height: 100%;
    flex-grow: 1;
    background-color: #eeeeee;
    margin: 4px 4px 4px 0px;
    text-align: center;
  }

  .nav-ul{
    margin-top: 5rem;
    list-style-type: none;
    /*border:1px solid red;*/
  }

  .nav-item{
    padding: 10px;
    /*border:1px solid blue;*/
  }

  .nav-item:hover{
    cursor: pointer;
  }

  .nav-item:not(.active):hover{
    background-color: rgba(49, 43, 40, 0.83);
  }

  a{
    text-decoration: none;
  }
  a:hover{
    text-decoration:none;
  }

  .nav-item:not(.active) a{
    color:white;
  }

  .active{
    background: #eeeeee;
    color:black;
  }

  /*.active a{*/
    /*color:black;*/
  /*}*/

  /*.active{*/
    /*background-color: #eeeeee;*/
    /*color:black;*/
  /*}*/

</style>
