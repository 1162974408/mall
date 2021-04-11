<template>
  <div class="banner">
    <div
      class="item"
      ref="item"
      @touchstart="touchStart"
      @touchmove="touchmove"
      @touchend="touchend"
    >
      <slot></slot>
    </div>
    <div class="indicator" v-if="showindicator">
      <div
        class="indi_item"
        v-for="item in slideConut"
        :key="item"
        :class="{ active: item == currentIndex + 1 }"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "banner",
  props: {
    // 轮播图相关数据
    swiperSum: {
      type: Array,
      required: true,
    },
    // 控制小图标是否显示
    showindicator: {
      type: Boolean,
      default: true,
    },
    // 动画过渡时间
    animDuration: {
      type: Number,
      default: 300,
    },
    //动画执行时间
    inserval: {
      type: Number,
      default: 2000,
    },
    // 滑动偏移率
    moveratio: {
      type: Number,
      default: 0.25,
    },
  },
  data() {
    return {
      slideConut: 1, //记录数据长度
      totalWidth: 0, //单个轮播图宽度
      timerId: 0, //定时器id
      currentIndex: 0, //下标
      scrolling: false, //是否正在滑动
      startX: 0, //鼠标接触屏幕时的x坐标
      currentX: 0, //鼠标滑动时的x坐标
      distance: 0,
      slideCount: this.swiperSum.length, //上面两个值的差（偏移量
      loop: true, //无限循环
      atuo: true, //自动播放
    };
  },
  methods: {
    handelDom() {
      // 记录原数组长度
      this.slideConut = this.swiperSum.length;
      // 1 复制第一个元素,使用json不会复制到地址
      let obj1 = JSON.parse(JSON.stringify(this.swiperSum[0]));
      // 2 设置key
      obj1.id = this.swiperSum.length;
      // 3 用smit方法发送一个请求让父组件修改数组
      this.$emit("bannersChange", obj1);
      // 4 得到轮播图的实际宽度
      this.totalWidth = this.$refs.item.offsetWidth;
      console.log(this.totalWidth);
    },
    // 开始滑动
    starttimer() {
      this.timerId = setInterval(() => {
        // 下标自加
        this.currentIndex++;
        // 滑动
        this.scrollContent(-this.currentIndex);
      }, this.inserval);
    },
    // 滑动动画
    setTransfrom(pos) {
      this.$refs.item.style.transform = `translate3d(calc(${pos} * 100vw),0,0)`;
    },
    // 停止滑动
    stoptimer() {
      // 清楚定时器
      clearInterval(this.timerId);
    },
    //滑动方法
    scrollContent(currpos) {
      // 设定滑动状态
      this.scrolling = true;
      // 添加动画效果
      this.$refs.item.style.transition =
        "transform " + this.animDuration + "ms";
      // 先滑动一次
      this.setTransfrom(currpos);
      // 判断当前元素是否为最后一个
      this.checkele();
      //滑动完毕
      this.scrolling = false;
    },
    // 判断是否为最后一个元素
    checkele() {
      // 设置一个延时器，滑动执行完后执行该定时器
      setTimeout(() => {
        // 判断当前下标是否为最后一个
        if (this.currentIndex > this.swiperSum.length - 2) {
          // 取消过渡效果
          this.$refs.item.style.transition = "0ms";
          // 修改下标
          this.currentIndex = 0;
          // 调用动画移动至第一个
          this.setTransfrom(-this.currentIndex);
        }
      }, this.animDuration);
    },
    // 鼠标（手指）点击屏幕
    touchStart(e) {
      // 若有图片正在滑动则不执行
      if (this.scrolling) return;
      console.log(e);
      // 停止定时器
      this.stoptimer();
      // 记录手指接触屏幕时的x轴坐标
      this.startX = e.touches[0].pageX;
    },
    // 手指开始滑动
    touchmove(e) {
      // 记录鼠标当前在屏幕的x轴坐标
      this.currentX = e.touches[0].pageX;
      // 计算和开始接触屏幕时的差值
      this.distance = this.currentX - this.startX;
      // 实时计算滑动距离
      let onlindeMove = this.distance;
      // 滑动
      this.setTransfrom(onlindeMove);
    },
    // 手指离开屏幕
    touchend(e) {
      // 拿到差值的绝对值
      let submove = Math.abs(this.distance);
      // 如果没有发生偏移则不执行
      if (this.distance == 0) {
        return;
      } else if (
        this.distance > 0 &&
        submove > this.totalWidth * this.moveratio
      ) {
        this.currentIndex--;
      } else if (
        this.distance < 0 &&
        submove > this.totalWidth * this.moveratio
      ) {
        this.currentIndex++;
      }
      // 无论是否滑动都执行移动方法
      this.scrollContent(-this.currentIndex);
      // 执行完再开始定时器
      this.starttimer();
    },
  },
  created() {
    // 创建实例对象后：1 将数组第一个元素复制一份到最后一个元素
    // 创建完成后此时还没有拿到数据所以设置一个延时器
    setTimeout(() => {
      // 执行函数
      this.handelDom();
      // 执行动画开始函数
      this.starttimer();
    }, 200);
  },
};
</script>
<style>
.banner {
  position: relative;
  display: flex;
  height: 180px;
}
.item {
  display: flex;
}
.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 90%;
  width: 100%;
  height: 8px;
}
.indicator .indi_item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(204, 204, 204, 0.493);
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}
.indi_item.active {
  background-color: rgba(0, 0, 0, 0.685);
}
</style>