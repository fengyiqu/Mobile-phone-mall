<template>
    <div id="app-newsList">
        <ul class="mui-table-view" v-for="item of list" :key="item.nid">
            <li class="mui-table-view-cell mui-media">
                <router-link :to="'/newsInfo?nid='+item.nid">
                    <img class="mui-media-object mui-pull-left" :src="item.pic">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>
                            <span>{{item.ntime  | time}} </span>    
                            <span>点击{{item.point}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
        <mt-button type="primary" size="large" @click="getMore">加载更多</mt-button>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            list:[],
            pno:0,
            pageSize:8
        }
    },
    methods:{
        getMore(){
           this.pno++;
           var url="http://127.0.0.1:3000/user/newslist?pno="+this.pno+"&pageSize="+this.pageSize;
           this.axios.get(url).then(res=>{
               var rows=this.list.concat(res.data.data)
               this.list=rows;
           })
        }  
    },
     created(){
        this.getMore();
    }

}
</script>
<style>
    #app-newsList li .mui-ellipsis{
        display:flex;
        font-size:12px;
        color:#226aff;
        justify-content: space-between;
    }
</style>


