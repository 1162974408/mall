<template>
  <div id="tab-bar">
    <tarbar-item path="/home" styleColor="red">
      <span
        slot="item-icon-active"
        class="iconfont icon-biaoqiankuozhan_shouye-321"
      ></span>
      <span slot="item-icon" class="iconfont icon-shouye"></span>
      <p slot="item-text">首页</p>
    </tarbar-item>
    <tarbar-item path="/apps" styleColor="red">
      <span
        slot="item-icon-active"
        class="iconfont icon-leimupinleifenleileibie2"
      ></span>
      <span
        slot="item-icon"
        class="iconfont icon-leimupinleifenleileibie"
      ></span>
      <p slot="item-text">分类</p>
    </tarbar-item>
    <tarbar-item path="/shopp" styleColor="red">
      <span slot="item-icon-active" class="iconfont icon-gouwucheman"></span>
      <span slot="item-icon" class="iconfont icon-gouwuchekong"></span>
      <p slot="item-text">商品</p>
    </tarbar-item>
    <tarbar-item path="/user" styleColor="red">
      <span slot="item-icon-active" class="iconfont icon-wode1"></span>
      <span slot="item-icon" class="iconfont icon-wode"></span>
      <p slot="item-text">用户</p>
    </tarbar-item>
  </div>
</template>
<script>
import tarbarItem from "../content/tarbarItem";
export default {
  name: "tarbar",
  components: {
    tarbarItem,
  },
};
</script>
<style>
@import "../../assets/images/font/iconfont.css";
#tab-bar {
  display: flex;
  text-align: center;
  height: 49px;
  background-color: #ccc;
  position: fixed;
  left: 0px;
  bottom: 0px;
  right: 0;
  box-shadow: 0 -1px 3px 0 rgba(155, 155, 155, 0.3);
}
#tab-bar span {
  font-size: 25px;
}
#tab-bar p {
  margin: 0;
}
</style>