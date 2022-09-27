<template>
  <div class="myHome">
    <Left />
    <container />
  </div>
</template>

<script setup>
import container from "./homePage/container.vue";
import Left from "./homePage/left.vue";
</script>


<style lang="less" scoped>
.myHome{
  display: flex;
  justify-content: left;
}
</style>