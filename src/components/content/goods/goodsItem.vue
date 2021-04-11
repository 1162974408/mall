<template>
    <div class="good-item">
        <img :src="item.imgsrc" alt="">
        <div class="info">
            <p>{{item.title}}</p>
            <span>{{item.price}}</span>
            <span>{{item.pop}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'goodsItem',
    props:{
        item:{
            type:Object
        }
    }
}
</script>
<style>
.good-item{
    width: calc(50% - 20px);
    margin-bottom: 15px;
    /* height: 180px; */
}
.good-item img{
    width: 100%;
    height: 150px;
    border-radius: 5px;
}
.info{
    font-size: 12px;
}
.info p{
    font-size: 14px;
}
.info span{
    text-align: center;
}
.info span:nth-of-type(1){
    color: #ff8e96;
    padding: 0 10px;
}
</style>