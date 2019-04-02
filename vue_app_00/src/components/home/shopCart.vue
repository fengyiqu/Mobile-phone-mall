<template>
    <div id="app-shopCart">
        <div class="mui-card">
			<div class="mui-card-header">
                <span>全选</span><input type="checkbox" @click="addAll" :checked="allcb">
            </div>
			<div class="mui-card-content" v-for="(item,i) of list" :key="item.id">
				<div class="mui-card-content-inner">
                    <div id="shopCar">
                         <div class="shop-top" >
                            <input type="checkbox" :checked="item.cb" :data-i="i" @click="modifyItem">
                            <div class="pic">
                                <img :src="item.picture" >
                            </div>
                            <div style="width:80px">
                                <div class="type">{{item.typeA}}</div>
                                <div class="pri">{{item.price}}元</div>
                            </div>
                            <div>
                                <button @click="redu" :data-id="item.id">-</button>
                                <input type="text" :value="item.count">
                                <button @click="add" :data-id="item.id">+</button>
                            </div>
                        </div>  
                        <div class="shop-bottom">
                            <div>小计：{{item.count*item.price}}元</div>
                            <button @click="del"  :data-id="item.id" :data-i="i">删除</button>
                        </div>   
                    </div>
				</div>
			</div>
			<div class="mui-card-footer">
                <span>总计：{{sum}}元</span>
                <button @click="delItem">删除选中的商品</button>
            </div>
		</div>
    </div>
</template>
<script>
import {Toast} from "mint-ui";
export default {
    data(){
        return{
            list:[],
            allcb:false,
            sum:0
        }
    },
    methods:{
        getShop(){
            var url="http://127.0.0.1:3000/user/cartlist";
            this.axios.get(url).then(res=>{
                var rows=res.data.data;
                this.$store.commit("updateCount",rows.length)
                for(var item of rows){
                    item.cb=false;
                }
                this.list=rows;
            })
        },
        addAll(e){
            var cb=e.target.checked;
            this.allcb=cb;
                for(var item of this.list){
                    item.cb=cb
                }
        },
        modifyItem(e){
            var i=e.target.dataset.i;
            var checked=e.target.checked;
            this.list[i].cb=checked;
            var count=0;
            for(var item of this.list){
                if(item.cb){
                    count++;
                } 
            }
            if(count==this.list.length){
                this.allcb=true;
            }else{
                this.allcb=false;
            }
        },
        add(e){
            var id = e.target.dataset.id
            for(var key of this.list){
                if(key.id == id){
                   key.count++;
                   return ; 
                }
            }       
        },
        redu(e){
            var id = e.target.dataset.id
            console.log(id)
            for(var key of this.list){
                if(key.id == id){
                    if(key.count>1){
                        key.count--;
                        return ;
                    }   
                }
            }
        },
        del(e){
            var id=e.target.dataset.id;
            var i=e.target.dataset.i;
            console.log(id);
            var url="http://127.0.0.1:3000/user/delShop?id="+id;
            this.axios.get(url).then(res=>{
                if(res.data.code==1){
                    this.list.splice(i,1);
                }
            })
        },
        delItem(){
            var html="";
            for(var item of this.list){
                if(item.cb){
                    html+=item.id+",";
                }
            }
            html=html.substring(0,html.length-1);
            var url="http://127.0.0.1:3000/user/delMitem?ids="+html;
            this.axios.get(url).then(res=>{
                if(res.data.code==1){
                    Toast("删除成功"),
                    this.getShop()
                }
            })
        },
    },
    created(){
        this.getShop();
        
    },
}
</script>
<style>
    #app-shopCart>div>div:first-child{
        justify-content: flex-start;
    }
    #app-shopCart>div>div:first-child>input{
        width:20px;
        height:20px;
    }
    #shopCar .shop-top,#shopCar .shop-bottom{
        display: flex;
        align-items:center;
        justify-content: space-between; 
    }
    
    #shopCar .shop-top>input{
        width:20px;
        height:20px;    
        line-height: 100px;
    }
    #shopCar>.shop-top{ 
        height:100px       
    }
    #shopCar>.shop-bottom{
        height:40px;
        border-top:1px solid #D9D8DC;
    }
   #shopCar button{
        width:40px;
        height:30px;
    }
    #shopCar input{
        width:50px;
        height:30px;
    }
      #shopCar .shop-top .pic {
          width: 80px;
          height:80px;
      }
      #shopCar .shop-top .pic img{
          width:100%;
          height:100%;
      }
      #shopCar .shop-bottom button{
          width:60px;
      }
      #shopCar .shop-top .type{
          font-size: 15px;
      }
       #shopCar .shop-top .pri{
           font-size: 15px;
       }
       #app-shopCart .mui-card-content-inner{
           padding-bottom: 0;
       }
</style>

