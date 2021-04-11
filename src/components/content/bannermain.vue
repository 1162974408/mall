<template>
  <div class="bannerView">
    <banner
      :swiperSum="banners"
      :showindicator="true"
      @bannersChange="bannersChange"
    >
      <banneritem v-for="item in banners" :key="item.img">
        <img :src="item.imgsrc" alt="">
      </banneritem>
    </banner>
  </div>
</template>
<script>
import banneritem from "../common/banner/bannerItem";
import banner from "../common/banner/banner";
export default {
  name: "bannermain",
  components: {
    banneritem,
    banner,
  },
  data() {
    return {
      banners: [
        {
          id: 0,
          imgsrc:
            "https://img0.baidu.com/it/u=2676935521,922112450&fm=11&fmt=auto&gp=0.jpg",
        },
        {
          id: 1,
          imgsrc:
            "https://img1.baidu.com/it/u=1246451335,909670857&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          id: 2,
          imgsrc:
            "https://img1.baidu.com/it/u=1538179465,4272098539&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          id: 3,
          imgsrc:
            "https://img1.baidu.com/it/u=379895550,2286813034&fm=26&fmt=auto&gp=0.jpg",
        },
        {
          id: 4,
          imgsrc:
            "https://img1.baidu.com/it/u=2186892634,2666748631&fm=26&fmt=auto&gp=0.jpg",
        },
      ],
      showindicator: true,
    };
  },
  methods: {
    //   子组件发送过来的修改数组的方法
    bannersChange(obj1) {
      this.banners.push(obj1);
    },
  },
};
</script>
<style>
.bannerView {
  background-color: #fff;
  position: relative;
  overflow: hidden;
}
</style>