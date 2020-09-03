# 系统截图
![image](https://github.com/1752325542/daifu/blob/master/doc/1.png)
![image](https://github.com/1752325542/daifu/blob/master/doc/2.png)
![image](https://github.com/1752325542/daifu/blob/master/doc/3.png)
![image](https://github.com/1752325542/daifu/blob/master/doc/43B65516-391A-4BAF-A53C-BBFD8AD4E760.png)

# 使用说明
	1. 本系统仅限交流、可以免费用使用，如需购买源码联系QQ：2136577284
	2. 测试地址：http://47.105.178.144/logic/user/login 账号和密码都是：admin

# 系统安装
	1. CentOS7.2以上系统
	2.	安装Nginx,
		yum install -y nginx  
		将站指向程序中的$path/daifu/web目录
	3.	安装Postgresql
		yum -y install postgresql-server
		service postgresql initdb
		service postgresql restart
		并建创建数据库名称:daifu,将Postgres密码修改为：devops,数据库备分见：$path/daifu/doc/db.sql
	4.	运行$path/daifu/cmd/main数据服务,及可以正常运行,注$path为环境变量
	5.	管理员账号和密码都是：admin，系统中有：管理员、代理、码商(支持三级码商码结算)、卡商、商户、运营5种角色，跟据需要自行创建
	
# 系统说明
	1. 	同一账户日限额20万
	2.	同一账户每日最高交易15笔
	3.	支持谷歌验证器登录
	4.	单笔交易最低10元，最高49999元
	5.	支持商户IP白名单

# 系统功能
	1.	应用管理: 同时支持公司多个业务系统对接。
	2.	商户管理: 支持商户入驻，费率设置，商户需要向平台方提供相关的资料备案。
	3.	渠道管理: 支持微信、支付宝、银联、京东支付等多种渠道。
	4.	账户管理: 渠道账户管理，支持共享账户（个人商户）及自有账户。
	5.	支付下单: 可手动批量下单、提供退款服务。
	6.	通知模块: 处理第三方支付渠道的异步通知，并将处理结果同步至业务系统。
	7.	对账处理: 实现支付系统的交易数据与第三方支付渠道交易明细的自动核对（通常T+1），确保交易数据的准确性和一致性。
	8.	挂码系统: 支持，银联，微信，支付宝二维码上传,支持微信和支付宝自回调。
	9.	商户结算: 计算收款交易中商户的收益,根据清算结果，将资金划拨至商户对应的资金帐户中,支持三级代理商户结算。
	10.  拼多多:支持拼多多出码，商品导入，支付结果同步,API下单。
	11.  卡商:支持银行卡对银行卡自动转账,过程全自动化，无需申请银行API接口,自动转账视频演示见（doc/demo.mp4）
  
  
# API接口
	1.	单笔代付接口
	2.	批量代付接口
	3.	交易查询接口
	4.	余额查询接口
	5.	打款通知回调接口
  
# 开发技术
	1.	Golang+CentOS+Postgres+Nginx+ReactJS
	2. 	商户API对接文档见doc/dev.html
	3. 	平台数据采用RSA2加密传输（同支付宝业务流程一样）

# Bug修复

	Bug反馈邮箱：1752325542@qq.com	

