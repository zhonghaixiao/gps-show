<template>
  <div class="layout" ref="body">
    <Layout>
      <Sider ref="side1" class="left-container" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="light" width="auto" :class="menuitemClasses" @on-select="onSelect">
          <MenuItem name="检测简介">
            <Icon type="md-wifi"></Icon>
            <span>检测简介</span>
          </MenuItem>
          <MenuItem name="传感器状态">
            <Icon type="ios-pie"></Icon>
            <span >传感器状态</span>
          </MenuItem>
          <MenuItem name="实时数据">
            <Icon type="ios-pin"></Icon>
            <span >实时数据</span>
          </MenuItem>
          <MenuItem name="智能分析">
            <Icon type="ios-analytics"></Icon>
            <span >智能分析</span>
          </MenuItem>
          <MenuItem name="报警状态">
            <Icon type="ios-alert"></Icon>
            <span>报警状态</span>
          </MenuItem>
          <MenuItem name="日志打印">
            <Icon type="ios-print"></Icon>
            <span >日志打印</span>
          </MenuItem>
          <MenuItem name="权限管理">
            <Icon type="ios-contacts"></Icon>
            <span >权限管理</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        isCollapsed: false
      }
    },
    mounted(){
      this.$refs.body.style.height = window.innerHeight + 'px';
      this.$router.push({path: '/index/introduction'});
    },
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      collapsedSider () {
        this.$refs.side1.toggleCollapse();
      },
      onSelect(name){
        if (name === '检测简介') {
          this.$router.push({path: '/index/introduction'});
        }
        if (name === '传感器状态') {
          this.$router.push({path: '/index/sensor-status'});
        }
        if (name === '实时数据') {
          this.$router.push({path: '/index/real-time'});
        }
        if (name === '智能分析') {
          this.$router.push({path: '/index/analyze'});
        }
        if (name === '报警状态') {
          this.$router.push({path: '/index/alarm-status'});
        }
        if (name === '日志打印') {
          this.$router.push({path: '/index/sensor-status'});
        }
        if (name === '权限管理') {
          this.$router.push({path: '/index/sensor-status'});
        }


      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .left-container{
    height: 100%;
    background-color: #ffffff;
  }
  .ivu-layout{
    height: 100%;
  }
  .layout{
    width: 100%;
    height: 100%;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 80px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 18px;
  }
  .index-container{
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
