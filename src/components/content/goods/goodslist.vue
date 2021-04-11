<template>
    <div class="good-list">
        <goodsitem v-for="item in goodlist" :key="item.id" :item='item'></goodsitem>
    </div>
</template>
<script>
import goodsitem from './goodsItem'
export default {
    name:'goodslist',
    components:{
        goodsitem
    },
    props:{
        goodlist:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style>
.good-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #fff;
}
</style>