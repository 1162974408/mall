<template>
  <div id="app">
    <router-view></router-view>
    <tarbar> </tarbar>
  </div>
</template>
<script>
import Tarbar from "./components/common/tarbar";
export default {
  name: "app",
  components: {
    Tarbar,
  },
};
</script>
<style>
/* 引入基础css文件 */
@import "assets/css/base.css";
</style>
