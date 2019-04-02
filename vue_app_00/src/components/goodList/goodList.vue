<template>
    <div id="app-goodList">
        <div class="good-item" v-for="item of list" :key="item.lid">
            <img :src="item.picture" @click="jumpInfo" :data-lid="item.lid">
            <h4>{{item.typeA}}</h4>
            <div class="details">{{item.details}}</div>
            <div class="info">
                <span class="now">{{item.price}}</span>
            </div>
            <div class="sell">
                <span>热卖中</span>
            </div>
        </div>
        <mt-button type="primary" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
            pno:0,
            ps:4
        }
    },
    methods:{
        jumpInfo(e){
            var lid=e.target.dataset.lid;
            console.log(lid);
            this.$router.push("/goodInfo?pid="+lid)
        },
        getMore(){
            this.pno++;
            var url="http://127.0.0.1:3000/user/products?pno="+this.pno+"&ps="+this.ps;
            this.axios.get(url).then(res=>{
                var rows=this.list.concat(res.data);
                this.list=rows;
                console.log(this.list)
            })
        }
    },
    created(){
        this.getMore();
    }
}
</script>
<style>
    #app-goodList{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 4px;
    }
    #app-goodList .good-item{
        width:49%;
        border:1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin:4px 0;
        padding:2px;
        display: flex;
        flex-direction: column;
        min-height:230px;
        justify-content: space-between
    }
    #app-goodList .good-item img{
        width:100%;    
    }
     #app-goodList .good-item h4{
         font-size:20px;
     }
      #app-goodList .good-item .now{
          color:red;
          font-size: 16px;
          font-weight: bold;
      }

</style>


