<template>
  <div class="">
    <div class="">
      <h1>桥梁监测简介</h1>
      <h2>{{this.$route.params.id}}</h2>
      <h2>{{this.$route.params.name}}</h2>
      <h2>{{this.$route.params}}</h2>
      <h2>{{this.$route.path}}</h2>
      <h2>{{this.$route.hash}}</h2>
      <h2>{{this.$route.fullPath}}</h2>
      <h2>{{this.$route.redirectFrom}}</h2>
    </div>
  </div>
  <!--<div class="container">-->
    <!--<div class="row head">-->
      <!--<h3 class="col-md-3">桥梁监测简介</h3>-->
    <!--</div>-->
    <!--&lt;!&ndash;<div class="row">&ndash;&gt;-->
      <!--&lt;!&ndash;<img class="col-md-12" src="../assets/brige1.jpg">&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="row">&ndash;&gt;-->
        <!--&lt;!&ndash;<p class="col-md-12">&ndash;&gt;-->
          <!--&lt;!&ndash;桥梁建成以后，由于受气候、环境因素的影响，结构材料会被腐蚀和逐渐老化，长期的静、动力荷载作用，使其强度和刚度随着时间的增加而降低。这不仅会影响行车安全，更会使桥梁的使用寿命缩短。对桥梁结构的健康状况进行检测与监测，并在此基础上对其安全性能进行评估是桥梁运营日常管理的重要内容。桥梁健康监测具有十分重要的作用。&ndash;&gt;-->
          <!--&lt;!&ndash;桥梁工程实际运营中病桥不断出现，其相应的承载能力评定工作日显重要。&ndash;&gt;-->
          <!--&lt;!&ndash;大量的文献资料显示，大跨度桥梁运营期病害与事故主要集中在主梁、桥墩的裂缝和变形、以及索力变化等方面。主梁是桥上部结构的主要受力结构，不仅承受弯矩，同时也承受各种水平分力作用，处于受组合力状态。主梁及桥面板在桥梁运营阶段出现最多的病害就是主梁腹板、顶板出现裂缝。裂缝产生的原因很多，如荷载作用、混凝土组成成分、温度变化、混凝土收缩和徐变、基础的不均匀沉降以及钢筋的锈蚀等。许多裂缝往往是几种不同因素联合作用的结果。桥墩病害的主要表现为墩偏位和混凝土裂缝。裂缝的原因与上述主梁发生裂缝的原因基本相同。所以了解桥梁的极限状态、承载潜力以及剩余寿命等对桥梁的合理利用具有重大现实意义。&ndash;&gt;-->
          <!--&lt;!&ndash;该结构健康监测系统设计通过采集大跨度桥梁主梁的应变、裂缝、加速度、温度等数据为承载能力评定和健康状况评估提供依据。为确保桥梁安全运营、延长桥梁使用寿命，早期发现桥梁病害和节约桥梁的维修费用，建设该大桥健康监测系统十分必要。&ndash;&gt;-->
        <!--&lt;!&ndash;</p>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--</div>-->
</template>

<script>

  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    mounted(){

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

  .head{
    margin-top: 20px;
    text-align: start;
    /*border:1px solid black;*/
  }
</style>
