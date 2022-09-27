<template>
  <div class="myStyleBlock selfInt">
    <li>
      <img src="https://eastgm.com/img/molisha.e4b94227.jpg" alt="" />
    </li>
    <li>勒思师</li>
    <li>码龄:2</li>
    <li>若兮福所依</li>
    <li>福兮祸所至</li>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.selfInt {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  li {
    width: 100%;
    margin-top: .5rem;
    text-align: center;
    text-shadow: 1px 1px #bbb, 1px 1px #333;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
 :last-child li{
    margin-top: 0rem;
  }
}
</style>