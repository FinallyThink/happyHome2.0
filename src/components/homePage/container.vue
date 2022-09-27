<template>
  <div id="homeContainer" class="myStyleBlock fontStyle">
    <div ref="RefCMD"></div>
  </div>
</template>

<script setup>
import fackerCMD from "@/package/fackerCMD/main.js";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
 
const selfIntroduction = ref();

const RefCMD = ref();
onMounted(async () => {
  selfIntroduction.value = await useStore().state.getSelfIntroduction();
  console.log(selfIntroduction)
  fackerCMD({
     aimDom:RefCMD.value,
     innerText: selfIntroduction.value
     });
});
</script>

<style lang="less" scoped>
#homeContainer {
  width: calc(100% - 200px);
  padding: 1rem;
  box-sizing: border-box;
}
</style>