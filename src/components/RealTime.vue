<template>
  <div class="container-fluid">
    <h1>GPS 实时采集</h1>
    <p>{{username}}</p>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    computed:{
      username(){
        return this.$route.fullPath
      }
    },
    methods:{
      goback(){
        window.history.length > 1
          ? this.$router.go(-1):this.$router.push('/')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>
