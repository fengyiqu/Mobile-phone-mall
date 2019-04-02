<template>
    <div app-comment>
        <div class="mui-card">
            <div class="mui-card-header"></div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <textarea placeholder="请最多吐槽200字" maxlength="120" v-model="msg"></textarea>
                    <mt-button size="large" type="primary" @click="addComment">发表评论</mt-button>
                </div>
            </div>
            <div class="mui-card-footer">
                <div class="list">
                    <div class="item" v-for="(item,i) of list" :key="item.id">
                        <div>第{{i+1}}楼 发表时间{{item.ctime | time1}}</div>
                        <div>{{item.content}}</div>
                    </div>
                </div>
            </div>
            <mt-button @click="getMore" size="large" type="primary">加载更多</mt-button>
		</div>  
    </div>
</template>
<script>
import {Toast} from "mint-ui";
export default {
    data(){
        return{ 
           pno:0,
           ps:5 ,
           list:[],
           msg:""  
        }
    },
    created(){
        this.getMore();
    },
    methods:{
        addComment(){
            var m=this.msg;
            var size=m.trim().length;
            if(size==0){
                Toast("内容不能为空");
                return;
            };
            var id=this.$route.query.nid
            var post=this.qs.stringify({
                nid:id,
                content:this.msg
            });
            var url="http://127.0.0.1:3000/user/addComment";
            this.axios.post(url,post).then(res=>{
                Toast("发表成功");
                this.msg="";
                this.pno=0;
                this.list=[];
                this.getMore();
            })
        },
        getMore(){
            this.pno++;
            var id=this.$route.query.nid
            var url="http://127.0.0.1:3000/user/getContent?nid="+id+"&pno="+this.pno+"&ps="+this.ps;
            this.axios.get(url).then(res=>{
                var rows=this.list.concat(res.data.data);
                this.list=rows;
            });
        }
    }
}
</script>

