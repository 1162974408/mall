<template>
  <div class="tar-consltr">
    <div
      class="title"
      v-for="(item, index) in titles"
      :key="item"
      :class="{ active: index === cureenIndex }"
      @click="itemClick(index)"
    >
      <!-- index是下标 -->
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "tarconsltr",
  props: {
    titles: {
      type: Array,
    },
  },
  data() {
    return {
      cureenIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      //   点击时跟换下标来控制active
      this.cureenIndex=index
    },
  },
};
</script>
<style>
.tar-consltr {
  height: 44px;
  line-height: 44px;
  display: flex;
  background: #fff;
}
.title {
  text-align: center;
  flex: 1;
}
.tar-consltr span {
  color: #000;
  padding: 5px;
}
.active span {
  color: #ff8e96;
  border-bottom: 3px solid #ff8e96;
}
</style>