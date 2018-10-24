<template>
  <div class="menu-list-container">
    <div
      v-for="(menu, index) in menuList"
      @click="selectMenu(index)"
      class="menu-item"
      :class="{'item-selected': index === currentIndex}"
    >
      {{menu}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavMenu",
    props: {
      menuList: Array
    },
    data(){
      return {
        currentIndex: 0
      };
    },
    methods: {
      selectMenu(index){
        this.currentIndex = index;
        this.$emit('onMenuChange', index);
      }
    }
  }
</script>

<style scoped lang="less">
  .menu-list-container{
    min-width: 150px;
    border-right: 2px solid lightgoldenrodyellow;
    color: dimgrey;
    .menu-item{
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 10px;
      padding-bottom: 10px;
      cursor: pointer;
    }
    .item-selected{
      background-color: lightgoldenrodyellow;
      color: #000;
      font-weight: bold;
    }
  }
</style>
