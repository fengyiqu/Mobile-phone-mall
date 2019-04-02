<template>
    <div id="app-newsInfo">
        <div class="mui-card">
            <div class="mui-card-header mui-card-media" :style="'height:40vw;background-image:url('+info.pic+')'"></div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>Posted on {{info.ntime | time1}}</p>
                    <p style="color: #333;">{{info.content}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <a class="mui-card-link">Like</a>
                <a class="mui-card-link">Read more</a>
            </div>
		</div>
        <comment-box></comment-box> 
    </div>
</template>
<script>
import comment from "../sub/comment.vue";
export default {
    data(){
        return{
            info:{},
        }
    },
    methods:{
        findNewsInfo(){
            var nid=this.$route.query.nid;
            console.log(nid);
            var url="http://127.0.0.1:3000/user/findNewsInfo?nid="+nid;
            this.axios.get(url).then(res=>{
                this.info=res.data.data[0];
                console.log(res.data.data[0]);
            })
        }
    },
    created(){
       this.findNewsInfo();
    },
    components:{
        "comment-box":comment
    }
}
</script>
<style>
    #app-newsInfo>.mui-card>.mui-card-header{
        background-size:contain;
        background-repeat:no-repeat; 
    }
</style>

