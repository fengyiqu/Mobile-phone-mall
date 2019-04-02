<template>
    <div id="app-goodInfo">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swipre-box :list="rows"></swipre-box>
                </div>
            </div>
            <div class="mui-card">
				<div class="mui-card-header">商品名称:{{info.typeA}} </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <p>销售价格:{{info.price}}</p> 
                购买数量:<div class="mui-numbox">
                            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub">-</button>
                            <input class="mui-input-numbox" type="number"  v-model="val"/>
                            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd">+</button>
                        </div> 
					</div>
				</div>
				<div class="mui-card-footer">
                   <mt-button class="btn" type="danger" size="small" @click="addCart">加入购物车</mt-button> 
                </div>
			</div>
			
		</div>
    </div>
</template>
<script>
import swipre from "../sub/swiper.vue"
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            rows:[],
            info:{},
            pid:this.$route.query.pid,
            val:1
        }
    },
    methods:{
        addCart(){
            var pid=this.pid;
            var price=this.info.price;
            var uid=1;
            var url="http://127.0.0.1:3000/user/addCart?pid="+pid+"&price="+price+"&uid="+uid;
            this.axios.get(url).then(res=>{
                if(res.data.data==401){
                    Toast("请登录");
                    return;
                }
                if(res.data.code==1){
                    Toast("添加成功")
                } else{
                    Toast("添加失败,请登录")
                }
            })
        },
        getImages(){
            var url="http://127.0.0.1:3000/user/imglist";
            this.axios.get(url).then(res=>{
                this.rows=res.data;
                
            })
        },
        findGoodInfo(){
            var url="http://127.0.0.1:3000/user/findProduct?pid="+this.pid;
            this.axios.get(url).then(res=>{
                this.info=res.data[0];
                
            })
        },
        goodAdd(){
            this.val++;
        },
        goodSub(){
            if(this.val>1){
            this.val--;
            }
        }
    },

    created(){
        this.getImages();
        this.findGoodInfo();
        
    },
    components:{
        "swipre-box":swipre
    }
}
</script>
<style>
    .mui-card-footer .btn{
        margin-left:65%;
    }
</style>


