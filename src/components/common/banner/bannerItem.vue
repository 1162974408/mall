<template>
  <div class="banner_item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "bannerItem",
  props: {

  },
};
</script>
<style>
.banner_item {
  /* vw是根据视口宽度来分配,因为父盒子没有宽度，所以用百分比是不行的 */
  width: 100vw;
  flex-shrink: 0;
  border: 1px solid #000;
}
.banner_item img {
  width: 100%;
}
</style>