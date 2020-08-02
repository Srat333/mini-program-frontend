// pages/userAccount/useraccount.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    content:"情感类博主",
    name: "Lucy",//回答者姓名
   userimg: "../../images/people1.jpeg",//回答者头像
   fans:"10",
  //  评价
   c_user_name:"Bob",
   c_time:"2020.07.07 17:17",
   c_content:"答主非常专业。。。。",
   c_user_img:"../../images/people2.jpeg",
   c_num:"7",
  //  问答
  q_user_name:"Bob",
  q_time:"2020.07.07 17:17",
  q_content:"答主非常专业。。。。",
  q_user_img:"../../images/people2.jpeg",
  q_num:"7"
  },

  

  onShow: function () {
    this.refresh();
  },
  submitQuestion: function () {
    wx.navigateTo({
      url: '../question/question',
    })
  },
  toComments: function () {
    wx.navigateTo({
      url: '../commentList/commentList',
    })
  },
  toQuestions: function () {
    wx.navigateTo({
      url: '../questionList/questionList',
    })
  },
})