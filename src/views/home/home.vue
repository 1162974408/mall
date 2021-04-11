<template>
  <div id="home">
    <mallhd>
      <span class="title" slot="centent">购物街</span>
    </mallhd>
    <bannermain></bannermain>
    <recommend :recommenData="recommendDtaa"></recommend>
    <tarconlstr :titles="['流行','新款','精选']"></tarconlstr>
    <goodlist :goodlist='goods.pop.list'></goodlist>
  </div>
</template>
<script>
import mallhd from "components/common/mallhd.vue";

import tarconlstr from 'components/content/tabConsltr/tarconsltr'
import bannermain from "components/content/bannermain.vue";
import goodlist from 'components/content/goods/goodslist.vue'

import { homedata } from "network/home.js";
import recommend from "./homechildren/recommend";
export default {
  name: "home",
  components: {
    mallhd,
    bannermain,
    recommend,
    tarconlstr,
    goodlist
  },
  // 实例创建时发送数据请求
  created() {},
  data() {
    return {
      mes: "msg",
      recommendDtaa: [
        {id:1, link: "", imgsrc: "https://img2.baidu.com/it/u=1336119765,2231343437&fm=26&fmt=auto&gp=0.jpg", title: "十点抢卷" },
        {id:2, link: "", imgsrc: "https://img2.baidu.com/it/u=3566088443,3713209594&fm=26&fmt=auto&gp=0.jpg", title: "好物特卖" },
        {id:3, link: "", imgsrc: "https://img0.baidu.com/it/u=233301930,3031623456&fm=11&fmt=auto&gp=0.jpg", title: "内购福利" },
        {id:4, link: "", imgsrc: "https://img1.baidu.com/it/u=3630945525,3946344314&fm=26&fmt=auto&gp=0.jpg", title: "初秋上新" },
      ],
      // 商品列表页
      goods:{
        pop:{
          page:0,
          list:[
            {
              id:1,
              imgsrc:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3517344191,2296045119&fm=26&gp=0.jpg',
              price:'100￥',
              pop:'12452',
              title:'夏季新款潮流卫衣'
            },
            {
              id:2,
              imgsrc:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1313159638,2084708603&fm=26&gp=0.jpg',
              price:'535￥',
              pop:'23252',
              title:'冬季爆款毛衣'
            },
            {
              id:3,
              imgsrc:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3032405796,2690983950&fm=26&gp=0.jpg',
              price:'351￥',
              pop:'4532',
              title:'夏季女生清新小短袖'
            },
            {
              id:4,
              imgsrc:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2225905363,2765750803&fm=26&gp=0.jpg',
              price:'224￥',
              pop:'134545',
              title:'小美人百褶裙'
            },
          ]
        },
        news:{
          page:0,
          list:[]
        },
        sell:{
          page:0,
          list:[]
        },
      }
    };
  },
};
</script>
<style>
#home{
  padding-bottom: 44px;
}
.header {
  background-color: #ff8e96;
  text-align: center;
  box-shadow: 0 1px 3px 0 #cccccc;
}
.title {
  line-height: 44px;
  color: white;
}
</style>