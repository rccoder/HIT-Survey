# HIT-Survey


哈工大调查问卷系统——基于LimeSurvey, 接入单点认证系统IDS


## 相关说明

* LimeSurvey 是一套基于 YII PHP 开源框架开发的问卷调查系统

* YII 和国产 PHP 框架长的很像

* 尽可能的删除繁杂的东西即可

* 接入 IDS 应该写在父类里面就可以了

* 从 Index.php 进入应用（和ThinkPHP长的很像）, framework 应该是 YII 自己的一些东西。 application里面就是 Limesurvey 的核心，修改的绝大多数都应该是这里的东西

* 开发阶段建议大家保持一样的数据库配置： 
	* 用户名：root 
	* 密码：''

## 安装

不需使用自动安装，大家可以新建立数据库lime，然后导入根目录的lime.sql，打开你的首页应该就能看到应用已经成功安装了。

登录地址为`xxxxx/index.php/admin`   会自动跳转过去，账号和密码都是`admin`. 
