<template>
    <div id="app-login">
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div >
                        <router-link class="rs" to="/register">注册</router-link>    
                    </div>
                    <form>
                        用户名 <input type="text" name="uname" v-model="uname">
                        密 码   <input type="password" name="upwd" v-model="upwd">
                        <button @click="butLogin">登录</button>
                    </form> 
                </div>
            </div>
		</div>
    </div>
</template>
<script>
import {Toast} from "mint-ui";
export default {
    data(){
        return{
            uname:"",
            upwd:""
        }
    },
    methods:{
        butLogin(){
            var uname=this.uname;
            var upwd=this.upwd;
            var reg=/^[a-z0-9]{3,12}$/i;
            if(!reg.test(uname)){
                Toast("用户名格式不正确，请检查");
                return;
            }
            var url="http://127.0.0.1:3000/user/login?uname="+uname+"&upwd="+upwd;
            this.axios.get(url).then(res=>{
                if(res.data.code==1){
                    this.$router.push("/Home")
                }else{
                    Toast("用户名或密码错误")
                }
            })
        }
    }
}
</script>
<style>
    .rs{
        margin-left:90%;
    }
 #app-login  button{
        width:100%;
        background-color:#26A2FF ;
    }
</style>


