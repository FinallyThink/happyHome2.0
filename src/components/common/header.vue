<template>
  <header class="myStyleBlock">
    <div id="navigation">
      <a class="active" href="javascript:" :style="{ left: left }"></a>
      <div id="menuBox">
        <router-link
          v-for="(e, i) in menuList"
          :key="i"
          :to="e.path"
          @click="changePage(e.path, i)"
          @mouseenter="changePage(e.path, i)"
          @mouseleave="changePage()"
          >{{ e.name }}</router-link
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
// Navigation list
const menuList = useStore().state.homeMenu;
//now localtion list
const NowPath = ref(location.hash.replace(/#/, ""));
//active Block left style
const left = ref();
//now active Current Number
const nowIndex = ref();
//previous active Number
const lastIndex = ref(0);
//init active Number And active Block left style
menuList.forEach((element, i) => {
  if (element.path == NowPath.value) {
    let rem =  i * 5 + "rem";
    nowIndex.value = i;
    left.value = rem;
  }
});
//when navigation link be click Or change active Block position
const changePage = (path, index) => {
  NowPath.value = path || location.hash.replace(/#/, "");
  //if had index move activeBlock ,else if black to previous position
  if (index == undefined) {
    nowIndex.value = lastIndex.value;
  } else {
    lastIndex.value = nowIndex.value;
    nowIndex.value = index;
  }
  left.value =  nowIndex.value * 5 + "rem";
};
</script>

<style lang="less" scoped>   
.active {
  background: rgba(0, 0, 0, 0.8);
  border-bottom: 2px solid orange;
  position: absolute;
  transition: 0.3s left;
  } 

header {
    border-radius: 0 0 15px 15px;
  padding: 0 2rem;
  height: @headerHeight;
  font-size: 1.2rem;
  text-shadow: 4px 4px 2px #999;
  position: relative;
  #navigation {
    height:@headerHeight;
    max-width:@maxwindowWidth;
    margin: 0 auto;
    position: relative;
  }
  #menuBox {
    position: absolute;
    a:hover {
      text-shadow: none;
    }
  }
  a {
    color: #fff;
    display: inline-block;
    width: 5rem;
    height: 100%;
    line-height:@headerHeight;
    text-align: center;
    box-sizing: border-box;
  }
}
</style>