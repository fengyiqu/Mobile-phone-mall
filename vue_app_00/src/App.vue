<template>
 <div class="app-container">
    <mt-header fixed title="小米商城"></mt-header>
    <router-view></router-view>
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
            <router-link to="/Home">
               <span class="mui-icon mui-icon-home"></span>
               <span class="mui-tab-label">首页</span>
            </router-link>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
            <router-link to="/shopCart">
               <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.optCartCount}}</span></span>
               <span class="mui-tab-label">购物车</span>
             </router-link>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
            <router-link to="/login">
               <span class="mui-icon mui-icon-extra mui-icon-extra-peoples"></span>
               <span class="mui-tab-label">登录</span>
            </router-link>
			</a>
		</nav> 
 </div>
</template>

<style>
   .app-container{
     padding-top:40px;
     padding-bottom:50px;
     overflow-x:hidden;
   }

 .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;

}
</style>
