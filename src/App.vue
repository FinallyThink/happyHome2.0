<script setup>
import Table from './components/Table.vue';
</script>

<template>
  <div id="main">
    <div id="head"></div>
    <div id="body"><Table /></div>
    <div id="end">尾部</div>
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
