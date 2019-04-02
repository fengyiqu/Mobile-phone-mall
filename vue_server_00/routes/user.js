const pool=require('../pool.js');
const express=require('express');
var router=express.Router();
// //用户注册
// router.post('/user_register',(req,res)=>{
//     var obj=req.body;  
//     var uname=obj.uname;
//     var upwd=obj.upwd;
//     var upwd1=obj.upwd1;
//     var uphone=obj.uphone;
//     if(!uname){
//         res.send({code:401,msg:'uname required'});
//     return;
//     }
//     var res1=/^(\d|\w){8,}$/ig;
//     if(res1.test(upwd)!=true){
//         res.send({code:402,msg:'upwd required'});
//     return;
//     }
//     if(upwd1!=upwd){
//         res.send({code:403,msg:"upwd1 required"});
//         return;
//     }
//     var res2=/^1[3-8]\d{9}$/ig;
//     if(res2.test(uphone)!=true){
//         res.send({code:404,msg:'phone required'});
//     return;
//     }
//     res.writeHead(200,{
//         "Access-Control-Allow-Origin":"*"
//     })
//     var sql="SELECT COUNT(*) AS c  FROM xm_user WHERE uname =? "
//     pool.query(sql,[uname],(err,result)=>{
//     if(err) throw err;
//     if(result[0].c>0){
//             res.write(JSON.stringify({code:407,msg:"用户名已存在"}));
//             res.end();     
//     }else{
//             var   sql="SELECT COUNT(*) AS c  FROM xm_user WHERE uphone =? " 
//             pool.query(sql,[uphone],(err,result)=>{
//             if(err) throw err; 
//             if(result[0].c>0){
//                 res.write(JSON.stringify({code:408,msg:"号码已注册"}));
//                 res.end(); 
//             }else{
//                 var sql="INSERT INTO xm_user SET ?";
//                 pool.query(sql,[obj],(err,result)=>{
//                     if(err) throw err ;
//                     if(result.affectedRows>0){
//                         res.write(JSON.stringify({code:200,msg:"注册成功"}));
//                         res.end();
//                     }
//                 })
//             }
//             }) 
//         }  
//     })
// });
// //用户登录
// router.post('/user_login',(req,res)=>{
//     var obj=req.body;
//     var uname=obj.uname;
//     var upwd=obj.upwd;
//     if(!uname){
//         res.send({code:401,msg:"用户名为空"})
//     }
//     if(!upwd){
//         res.send({code:402,msg:"密码为空"})
//     }
//     res.writeHead(200,{
//         "Access-Control-Allow-Origin":"*",
//         "Access-Allow-Credentials":true
//     })
//     var sql="SELECT uid FROM xm_user WHERE uname=? AND upwd=?"
//     pool.query(sql,[uname,upwd],(err,result)=>{
//         if(err) throw err;
//         if(result.length==0){
//             res.write(JSON.stringify({code:403,msg:"用户名或者密码错误"}));
//             res.end();
//         }else{
//             var uid=result[0].uid;
//             console.log(uid);
//             req.session.uid=uid;
//             console.log(req.session);
//             console.log( req.session.uid)
//             res.write(JSON.stringify({code:200,msg:"登录成功"}));
//             res.end();
//         }
//     })
// });

// //用户详细信息
// router.post('/user_details',(req,res)=>{

// });
// //添加购物车
// router.get('/user_shopping',(req,res)=>{
//     var uid=req.session.uid;
//     console.log(req.session);
//     console.log(uid);
//     if(!uid){
//         res.send({code:203,msg:"请登录"});
//     }else{
//     var obj=req.query;
    
//     var picture=obj.picture;
//     var typeA=obj.typeA;
//     var details=obj.details;
//     var price=obj.price;
//     res.writeHead(200,{
//         "Access-Control-Allow-Origin":"*",
//         // "Access-Allow-Credentials":true
//     });
//     var sq="SELECT COUNT(*) AS c FROM xm_user_shoppingcat WHERE typeA=? AND uid=?";
//     pool.query(sq,[obj.typeA,uid],(err,result)=>{
//         if(err) throw err;
//         var c=result[0].c
//         if(c==0){
//             var sql ="INSERT INTO xm_user_shoppingcat VALUES(?,?,?,?,?,?)";
//             pool.query(sql,["",picture,typeA,details,price,uid],(err,result)=>{
//                 if(err) throw err;
//                 if(result.affectedRows>0){
//                     res.write(JSON.stringify({code:201,msg:"加入购物车成功"})); 
//                     res.end();
//                 }
//             })
//         }else{
//             res.write(JSON.stringify({code:202,msg:"购物车已存在"})); 
//             res.end();
//         }
//     }) 
// }     
// });
// //查询购物车
// router.get("/shop_query",(req,res)=>{
//      var uid=req.session.uid;
//      console.log(uid)
//     res.writeHead(200,{
//         "Access-Control-Allow-Origin":"*",
//         // "Access-Allow-Credentials":true
//     });
//     var sql ="SELECT * FROM xm_user_shoppingcat WHERE uid=?";
//         pool.query(sql,[uid],(err,result)=>{
//             if(err) throw err;
//             res.write(JSON.stringify(result));
//             res.end();
//         })
// })
// //购物车删除
// router.get("/shop_delect",(req,res)=>{
//     var name=req.query.name;
//     res.writeHead(200,{
//         "Access-Control-Allow-Origin":"*",
//         // "Access-Allow-Credentials":true
//     });
//     var sql="DELETE FROM xm_user_shoppingcat WHERE typeA=?"
//     pool.query(sql,[name],(err,result)=>{
//         if (err) throw err;
//         console.log(result)
//         if(result.affectedRows>0){
//             res.write(JSON.stringify({code:200,msg:"删除成功"}));
//             res.end();
//         }else{
//             res.write(JSON.stringify({code:201,msg:"删除失败"}));
//             res.end();
//         }
//     })

// })
// //用户订单
// router.get('/user_order',(req,res)=>{

// });
// //手机列表
// router.get('/phoneList',(req,res)=>{
//     var sql=`SELECT * FROM xm_phone_list`;
//     pool.query(sql,(err,result)=>{
//         if (err) throw err;
//         res.writeHead(200,{
//             "Access-Control-Allow-Origin":"*",
//             // "Access-Allow-Credentials":true
//         });
//         res.write(JSON.stringify(result));
//         res.end();
//     })
// });
// //手机详情
// router.get('/phone_details',(req,res)=>{
//     var id=req.query.lid;
//     var sql="SELECT * FROM xm_phone_list WHERE lid=?";
//     pool.query(sql,[id],(err,result)=>{
//         if (err) throw err;
//         res.writeHead(200,{
//             "Access-control-Allow-Origin":"*",
//             // "Access-Allow-Credentials":true
//         });
//         res.write(JSON.stringify(result));
//         res.end();
//     })
// });
// 用户注册
router.post("/register",(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    var sql="SELECT COUNT(*) AS c  FROM xm_login WHERE uname =?"
    pool.query(sql,[uname],(err,result)=>{
        if (err) throw err;
        if(result[0].c>0){
            console.log(123)
            res.send({code:401,msg:"用户名已注册"})
        }else{
            var sql="INSERT INTO xm_login VALUES(null,?,?)";
            pool.query(sql,[uname,upwd],(err,result)=>{
            if(err) throw err;
            if(result.affectedRows>0){
                console.log(result)
                res.send({code:1,msg:"注册成功"})
            }else{
                console.log(234)
                res.send({code:-1,msg:"注册失败"})
            }
        })
        }
    })
    
})
//首页轮播图
router.get('/imglist',(req,res)=>{
    var sql="SELECT * FROM xm_list_slideshow";
    pool.query(sql,(err,result)=>{
        if (err) throw err;
        res.send(result);
    })
});
// 新闻列表
router.get('/newslist',(req,res)=>{
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    console.log(pageSize)
    if(!pno){
       pno=1;
    }
    if(!pageSize){
        pageSize=8;
    }
    var sql="SELECT nid,title,pic,ntime,point FROM xm_news LIMIT ?,?";
    var offset=(pno-1)*pageSize;
    pageSize = parseInt(pageSize);
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
         res.send({code:1,data:result}) 
    })

})
// 获取新闻的详细信息
router.get("/findNewsInfo",(req,res)=>{
    var nid=req.query.nid;
    var reg=/^\d{1,}$/;
    if(!reg.test(nid)){
        res.send({code:-1,msg:"新闻编号格式有误"});
        return;
    }
    var sql="SELECT nid,title,content,ntime,pic FROM xm_news WHERE nid=?"
    pool.query(sql,[nid],(err,result)=>{
        if (err) throw err;
        res.send({code:1,data:result});
    })
})
// 获取评论列表
router.get("/getContent",(req,res)=>{
    var nid=req.query.nid;
    var pno=req.query.pno;
    var ps=req.query.ps;
    if(!pno){
        pno=1;
    }
    if(!ps){
        ps=5
    }
    var sql="SELECT id,content,ctime,nid FROM xm_content WHERE nid=? LIMIT ?,?";
    var offset=(pno-1)*ps;
    ps = parseInt(ps);
    pool.query(sql,[nid,offset,ps],(err,result)=>{
        if (err) throw err;
        res.send({code:1,data:result})
    })
})
// 发表评论
router.post("/addComment",(req,res)=>{
    var nid=req.body.nid;
    var content=req.body.content;
    var sql="INSERT INTO xm_content VALUES(NULL,?,now(),?)"
    pool.query(sql,[content,nid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"评论发表成功"})
        }else{
            res.send({code:-1,msg:"评论发表失败"})
        }
    })
})
// 商品列表
router.get("/products",(req,res)=>{
    var pno=req.query.pno;
    var ps=req.query.ps;
    if(!pno){
        pno=1
    }
    if(!ps){
        ps=4
    }
    var sql="SELECT * FROM xm_phone_list LIMIT ?,?";
    var offset=(pno-1)*ps;
    ps = parseInt(ps);
    pool.query(sql,[offset,ps],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
// 获取商品的详细信息
router.get("/findProduct",(req,res)=>{
    var lid=req.query.pid;
    var sql="SELECT * FROM xm_phone_list WHERE lid=?";
    pool.query(sql,[lid],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
// 用户登录
router.get("/login",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var sql="SELECT id FROM xm_login WHERE uname=? AND upwd=md5(?)";
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"用户名或者密码错误"})
        }else{
            console.log(result)
            var uid=result[0].id;
            req.session.uid=uid;
            console.log(req.session);
            res.send({code:1,msg:"登录成功"}); 
        }
    })
})
//购物车添加
router.get("/addCart",(req,res)=>{
    var pid=req.query.pid;
    var count=1;
    var uid=req.session.uid;
    if(!uid){
        res.send({code:401,msg:"请登录"})
    }
    console.log(req.session)
    var price=req.query.price;
    var sql="SELECT id FROM xm_cart WHERE uid=? AND pid=?";
    pool.query(sql,[uid,pid],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            var sql=`INSERT INTO xm_cart VALUES(null,1,${price},${pid},${uid})`;
        }else{
            var sql=`UPDATE xm_cart SET count=count+1 WHERE pid=${pid} AND uid=${uid}`;
        }
        pool.query(sql,(err,result)=>{
            if (err) throw err;
            if(result.affectedRows>0){
                res.send({code:1,msg:"添加成功"});
            }else{
                res.send({code:-1,msg:"添加失败"})
            }
            
        })
    })
})
// 购物车列表
router.get("/cartlist",(req,res)=>{
    var uid=req.session.uid;
    console.log(uid)
    var sql="SELECT c.id,c.count,c.price,c.uid,c.pid,l.typeA,l.picture FROM xm_cart c,xm_phone_list l WHERE l.lid=c.pid AND c.uid=?";
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
    })
})
// 删除购物车商品
router.get("/delShop",(req,res)=>{
    var id=req.query.id;
    var sql="DELETE FROM xm_cart WHERE id=?";
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"删除成功"})
        }else{
            res.send({code:-1,msg:"删除失败"})
        }
    })
})
// 删除多个选中的商品
router.get("/delMitem",(req,res)=>{
    var ids=req.query.ids;
    var sql="DELETE FROM xm_cart WHERE id IN ("+ids+")";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"删除成功"})
        }else{
            res.send({code:-1,msg:"删除失败"})
        }
    })
})
module.exports=router;