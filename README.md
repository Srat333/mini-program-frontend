# 项目简介
产品名称：请教一下
定位：年轻人的付费咨询产品（微信小程序）
减少年轻人由于信息不对称产生的迷茫和焦虑。例如，咨询高考志愿填报，大学专业选择，大学生活规划，大学生择业等。

## 预期功能

- [x] 用户登陆
- [x] 付费提问
- [x] 展示本人主页
- [x] 搜索回答
- [x] 回答
- [x] 付费旁听
- [x] 评价订单
- [x] 查看问答详情
- [x] 查看历史订单
  * 未支付
  * 未评价
  * 已完成
- [x] 查看答主详情
  * 用户评价
  * 公开咨询
- [ ] 统一UI风格
- [ ] 增加新功能
  * 点赞关注
  * 限时抢购
- [ ] 小程序上线
- [ ] 接入微信支付API


## ui展示
![ui](https://github.com/Srat333/mini-program-frontend/blob/master/ui.png)
## 架构图

![architecture](https://github.com/Srat333/qa-tars-client/blob/master/tarsproject.jpg)

## 代码目录说明
### 小程序
```
├── README.md
├── api
│   └── request.js
├── app.js
├── app.json
├── app.wxss
├── images
│   ├── .DS_Store
│   ├── avatar1.png
│   ├── avatar2.png
│   ├── camera.png
│   ├── delete.png
│   ├── home.png
│   ├── people1.jpeg
│   ├── people2.jpeg
│   ├── profile.png
│   ├── star0.png
│   ├── star1.png
│   └── testOrderPage.jpg
├── pages
│   ├── .DS_Store
│   ├── answer
│   │   ├── answer.js
│   │   ├── answer.json
│   │   ├── answer.wxml
│   │   └── answer.wxss
│   ├── commentList
│   │   ├── commentList.js
│   │   ├── commentList.json
│   │   ├── commentList.wxml
│   │   └── commentList.wxss
│   ├── evaluation
│   │   ├── evaluation.js
│   │   ├── evaluation.json
│   │   ├── evaluation.wxml
│   │   └── evaluation.wxss
│   ├── index
│   │   ├── index.js
│   │   ├── index.json
│   │   ├── index.wxml
│   │   └── index.wxss
│   ├── logs
│   │   ├── logs.js
│   │   ├── logs.json
│   │   ├── logs.wxml
│   │   └── logs.wxss
│   ├── profile
│   │   ├── profile.js
│   │   ├── profile.json
│   │   ├── profile.wxml
│   │   └── profile.wxss
│   ├── question
│   │   ├── question.js
│   │   ├── question.json
│   │   ├── question.wxml
│   │   └── question.wxss
│   ├── questionDetail
│   │   ├── questionDetail.js
│   │   ├── questionDetail.json
│   │   ├── questionDetail.wxml
│   │   └── questionDetail.wxss
│   ├── questionList
│   │   ├── questionList.js
│   │   ├── questionList.json
│   │   ├── questionList.wxml
│   │   └── questionList.wxss
│   └── userAccount
│       ├── userAccount.js
│       ├── userAccount.json
│       ├── userAccount.wxml
│       └── userAccount.wxss
├── project.config.json
├── sitemap.json
└── utils
    ├── .DS_Store
    ├── common.util.js
    ├── object.util.js
    ├── promise.util.js
    └── util.js
```
### Tars服务端
```
.
├── pom.xml
├── src
│   └── main
│       ├── java
│       │   └── com
│       │       └── tencent
│       │           └── tars
│       │               └── server
│       │                   ├── Application.java
│       │                   ├── dao
│       │                   │   ├── AnswerDao.java
│       │                   │   ├── OrderDao.java
│       │                   │   └── QuestionDao.java
│       │                   ├── entity
│       │                   │   ├── Answer.java
│       │                   │   ├── Order.java
│       │                   │   └── Question.java
│       │                   ├── exception
│       │                   │   ├── DefinitionException.java
│       │                   │   ├── ErrorEnum.java
│       │                   │   ├── GlobalExceptionHandler.java
│       │                   │   ├── Result.java
│       │                   │   └── ResultUtil.java
│       │                   └── servant
│       │                       ├── AnswerServant.java
│       │                       ├── Impl
│       │                       │   ├── AnswerServantImpl.java
│       │                       │   ├── OrderServantImpl.java
│       │                       │   └── QuestionServantImpl.java
│       │                       ├── OrderServant.java
│       │                       └── QuestionServant.java
│       └── resources
│           ├── application.properties
│           └── hello.tars
└── tree.text
```
### Tars客户端
```
.
├── pom.xml
├── src
│   └── main
│       ├── java
│       │   └── com
│       │       └── tencent
│       │           └── tars
│       │               └── client
│       │                   ├── Application.java
│       │                   ├── exception
│       │                   │   └── Result.java
│       │                   ├── testclient
│       │                   │   ├── AnswerServant.java
│       │                   │   ├── Impl
│       │                   │   │   ├── AnswerServantImpl.java
│       │                   │   │   ├── OrderServantImpl.java
│       │                   │   │   └── QuestionServantImpl.java
│       │                   │   ├── OrderServant.java
│       │                   │   └── QuestionServant.java
│       │                   └── testserver
│       │                       ├── AnswerPrx.java
│       │                       ├── OrderPrx.java
│       │                       └── QuestionPrx.java
│       └── resources
│           ├── application.properties
│           ├── client.tars
│           └── hello.tars
└── tree.text
```
# 项目地址
## 小程序前端
https://github.com/Srat333/mini-program-frontend
## Tars服务端
https://github.com/Srat333/qa-tars-server.git
## Tars客户端
https://github.com/Srat333/qa-tars-client.git

