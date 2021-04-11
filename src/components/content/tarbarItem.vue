<template>
  <!-- 在item的组件中添加点击事件，而不是在App组件中添加 -->
  <div class="tarbarItem" @click="itemClick">
    <!-- 使用插槽让内容具体化 -->
    <!-- 使用v-if来选择要显示的插槽 -->
    <div v-if="!isActive" class="icon">
      <slot name="item-icon">非活跃图片 </slot>
    </div>
    <div v-else>
      <slot name="item-icon-active">活跃图片</slot>
    </div>
    <!-- 因为插槽的内容会被完全的替换，所以v-bind不能放在里面，不然类时添加不上去的 -->
    <div :style="styleActive"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "tarbarItem",
  props: {
    path: String,
    styleColor:String
  },
  data() {
    return {
      //   添加一个开关控制活跃状态时的图片和文字显示
      // isActive: true,
    };
  },
  methods: {
    itemClick() {
      // $router 是Vuerouter对象实例，$route是当前活跃路由对象，this是vueComponten对象实例
      // console.log(this.$router, this.$route);
      // console.log(this);
      this.$router.replace(this.path);
    },
  },
  // 计算属性
  computed:{
    isActive(){
      // 当前活跃路由的路径是否和传入的path匹配，匹配则是活跃状态，返回true
      return this.$route.path.indexOf(this.path) !== -1
    },
    styleActive(){
      // 判断用户是否活跃，活跃则将字体颜色变成用户设定的颜色，否则返回空对象
      return this.isActive ? {color:this.styleColor} : {}
    }
  },
};
</script>
<style>
.tarbarItem {
  font-size: 14px;
  flex: 1;
}
/* 活跃状态的文字颜色 */
/* .active {
  color: red;
} */
</style>