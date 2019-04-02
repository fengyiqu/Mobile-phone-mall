const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routes/user.js');
const session = require('express-session');
const cors=require("cors");
var server=express();
server.listen(3000);
// 配置跨域访问模块，那个域名允许访问
server.use(cors({
    origin:["http://127.0.0.1:8081","http://localhost:8081"],//允许跨域访问域名列表
    credentials:true//跨域访问允许保存session
}));
// const cookieParser=require('cookie-parser')
// server.use(cookieParser());
// 配置session
server.use(session({
	secret:"128位随意字符",
	resave:false,
	saveUninitialized:true,
	cookie:{
		maxAge:1000*60*60*8
	}
}))
server.use(express.static('../public'));
server.use(bodyParser.urlencoded({
	extended:false
}));
server.use('/user',userRouter);