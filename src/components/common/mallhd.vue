<template>
  <div class="header">
    <div class="left"><slot name="left"></slot></div>
    <div class="centent"><slot name="centent"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: "mallhd",
};
</script>
<style>
.header {
  height: 44px;
  display: flex;
}
.left {
  width: 50px;
}
.centent {
  flex: 1;
}
.right {
  width: 50px;
}
</style>