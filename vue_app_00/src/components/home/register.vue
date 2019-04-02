<template>
    <div id="app-register">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <form>
                        用户名 <input type="text" name="uname" v-model="uname">
                        密 码   <input type="password" name="upwd" v-model="upwd">
                        <button @click="reg">注册</button>
                    </form> 
                </div>
            </div>
		</div>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            uname:"",
            upwd:""
        }
    },
    methods:{
        reg(){
            var uname=this.uname;
            var upwd=this.upwd;
            var postdata=this.qs.stringify({
                uname:uname,
                upwd:upwd
            });
            var url="http://127.0.0.1:3000/user/register";
            this.axios.post(url,postdata).then(res=>{
                console.log(res);
                if(res.data.code==1){
                    this.$router.push("/login"); 
                }else if(res.data.code==-1){
                    Toast("注册失败");
                }else{   
                    Toast("用户名已被占用")
                } 
                
            })
        }
    }
}
</script>
<style>
    #app-register  button{
        width:100%;
        background-color:#26A2FF ;
        border:none;
    }
</style>

