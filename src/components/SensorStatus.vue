<template>
  <div class="sensor-container">
    <img class="main-back" src="../assets/brige1.jpg">
  </div>
</template>

<script>

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .sensor-container{
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
    &::-webkit-scrollbar{
      display: none;
    }
  }


</style>
