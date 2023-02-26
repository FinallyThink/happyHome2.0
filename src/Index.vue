
<template>
<div id="container">
  <Header />
  <div id="main">
    <router-view></router-view>
  </div>
  <Footer/>
</div>
</template>

<script setup>
import Header from '@/components/common/header.vue';
import Footer from '@/components/common/footer.vue';
</script>

<style lang="less" scoped>    

#container{
  display: grid;
  min-height: 100vh;
  grid-auto-rows:  auto 1fr auto;
  background: url(https://eastgm.com/img/backGround.561a04b0.webp);
}
#main{
  margin:4rem auto;
  max-width: @maxwindowWidth;
  width: 100%;
  box-sizing: border-box;
}
@media (max-width:1789px){
	body{min-width:1580px}
}
@media (max-width:1549px){
	body{min-width:1260px}
}
@media (max-width:1280px){
	body{min-width:1030px}
}
</style>