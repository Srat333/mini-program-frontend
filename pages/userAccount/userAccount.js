// pages/userAccount/useraccount.js

// TODO: Fix bug passing params to this page.
Page({
  /**
   * 页面的初始数据
   */
  data: {
    content: "情感类博主",
    name: "Lisa",//回答者姓名
    userimg: "https://i.ibb.co/t3BWd6f/image.jpg",//回答者头像
    fans: "10",
    //  评价
    c_user_name: "NPC",
    c_time: "2020.07.07 17:17",
    c_content: "答主非常专业。。。。",
    c_user_img: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIypiccMxicMfqeYab8ekRfh2BV37c64ffhsJtGKb6TVTEqEkaMQHz98BtINgDcNakJzrgoNWVOHBDA/132",
    c_num: "7",
    //  问答
    q_user_name: "Bob",
    q_time: "2020.07.07 17:17",
    q_content: "答主非常专业。。。。",
    q_user_img: "../../images/people2.jpeg",
    q_num: "7"
  },

  onLoad: function (options) {
    var that = this
    var img = JSON.parse(options.img);
    var username = JSON.parse(options.username);
    that.setData({
      userimg: img,
      name: username,
    })
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