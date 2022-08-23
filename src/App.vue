<script setup>
import Bill from './view/bill/index.vue';
</script>

<template>
  <div id="main">
    <div id="head"></div>
    <div id="body"><Bill/></div>
    <div id="end"></div>
  </div>
</template>

<style scoped lang="less">
#main{
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    #head{
        height: 3rem;
        background: #409eff;
    }
}
</style>
