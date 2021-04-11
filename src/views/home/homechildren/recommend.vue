<template>
  <div class="recommend">
    <div class="recommend_item" v-for="item in recommenData" :key="item.id">
      <a href="">
        <img :src="item.imgsrc" alt="" />
        <div class="tile">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommend",
  props: {
    recommenData: {
      type: Array,
    },
  },
};
</script>
<style>
.recommend {
  display: flex;
  height: 100px;
  background-color: #fff;
}
.recommend_item {
  flex: 1;
  text-align: center;
  align-content: space-around;
}
.recommend_item a {
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.recommend_item img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>