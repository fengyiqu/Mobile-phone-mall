<template>
    <div id="app-swiper">
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item of list" :key="item.id">
                <img :src="item.pic" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:["list"]
}
</script>
<style>
    #app-swiper .mint-swipe{
        height:200px;
    }
    #app-swiper .mint-swipe img{
        width:100%;
        height:100%;
    }
</style>


