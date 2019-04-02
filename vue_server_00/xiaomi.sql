#设置链接服务器的编码
SET NAMES UTF8;
#丢弃数据库smallmi,如果存在
DROP DATABASE IF EXISTS xiaomi;
#创建数据库smallmi，设置存储编码
CREATE DATABASE xiaomi CHARSET=UTF8;
#进入数据库
USE xiaomi;
#首页轮播图
CREATE TABLE xm_list_slideshow(
	sid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	pic VARCHAR(128)
);
INSERT INTO xm_list_slideshow VALUES
("1","img1/banner.jpg"),
("2","img1/banner2.jpg");
#新闻列表
CREATE TABLE xm_news(
	nid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(255),
	pic VARCHAR(255),
	ntime DATETIME,
	point INT,
	content VARCHAR(2000)
);
INSERT INTO xm_news VALUES
(null,'123','img1/liebiao_xiaomi5c.jpg',now(),0,'123'),
(null,'123','img1/hm4-80.jpg',now(),0,'123'),
(null,'123','img1/hm4x_80.png',now(),0,'123'),
(null,'123','img1/hmn4x80.png',now(),0,'123'),
(null,'123','img1/hmnote4-80.jpg',now(),0,'123'),
(null,'123','img1/5c_80.png',now(),0,'123'),
(null,'123','img1/compare.jpg',now(),0,'123'),
(null,'123','img1/MIX-80.jpg',now(),0,'123'),
(null,'scd','img1/hm4A-80.jpg',now(),0,'dfdg'),
(null,'dgrg','img1/hm4-80.jpg',now(),0,'ssd'),
(null,'sefwa','img1/hm4x_80.png',now(),0,'vdsfe'),
(null,'123','img1/hmn4x80.png',now(),0,'123'),
(null,'123','img1/hmnote4-80.jpg',now(),0,'123'),
(null,'123','img1/5c_80.png',now(),0,'123'),
(null,'123','img1/compare.jpg',now(),0,'123'),
(null,'123','img1/MIX-80.jpg',now(),0,'123');
#小米手机列表
CREATE TABLE xm_phone_list(
	lid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	picture VARCHAR(128),
	typeA VARCHAR(128),
	details VARCHAR(128),
	price DECIMAL(10,2)
);
INSERT INTO xm_phone_list VALUES
('1','img1/liebiao_xiaomi6.jpg','小米6','5.16早十点开售,下单立减100元',2499.00),
('2','img1/liebiao_xiaomi5c.jpg','小米手机5c','搭载澎湃S1八核高性能处理器',2799.00),
('3','img1/liebiao_xiaomint2.jpg','小米Note2','5月9号-20号小米note2享花呗12期分期免息',2499.00),
('4','img1/liebiao_xiaomimix.jpg','小米MIX','5月9号-20号小米MIX享花呗12期分期免息',3499.00),
('5','img1/liebiao_xiaomi5s.jpg','小米5s','暗夜之眼超感光相机/无孔式超声波',1999.00),
('6','img1/liebiao_xiaomi5.jpg','小米手机5','骁龙820处理器/UF8 2.0 闪存',1799.00),
('7','img1/liebiao_hongmin4.jpg','红米Note4','十核旗舰处理器/UF8 2.0 闪存',1399.00),
('8','img1/pinpai3.png','小米手机5 64GB','5月9日-10日下单立减100元',1799.00),
('9','img1/liebiao_hongmin42.jpg','红米4','2.5D玻璃，金属一体化机身',999.00),
('10','img1/liebiao_hongmin4x.jpg','红米Note 4X 全网通版','多彩金属/4200mAh超长续航',1299.00);
# 新闻评论
CREATE TABLE xm_content(
	id	INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	content VARCHAR(200),
	ctime DATETIME,
	nid INT
);
INSERT INTO xm_content VALUES
(NULL,'赞一个1',now(),5),
(NULL,'敖德萨多',now(),5),
(NULL,'赞安达市多',now(),5),
(NULL,'赞行者常至',now(),5),
(NULL,'赞创作者的个',now(),5),
(NULL,'大武当个',now(),5),
(NULL,'赞一个',now(),5),
(NULL,'赞达到三成个',now(),5),
(NULL,'赞差个',now(),5),
(NULL,'五大个',now(),5),
(NULL,'不舒服个',now(),5),
(NULL,'请求参数',now(),5),
(NULL,'我的错',now(),5),
(NULL,'而供热个',now(),5);
#用户登录表
CREATE TABLE xm_login(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	uname VARCHAR(25),
	upwd VARCHAR(32)
);
INSERT INTO xm_login VALUES
(null,'tom',md5('123')),
(null,'kou',md5('234'));
#购物车表
CREATE TABLE xm_cart(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	count INT,
	price DECIMAL(15,2),
	pid INT,
	uid INT
);
