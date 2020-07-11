// pages/hello/hello.js
var app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    ret: "",
    navbar: ['答主', '问题'],
    currentTab: 0,
    dataList:[
      {
        user_id:1,
        user_name:'答主1',
        user_desc:'专注于大学生活',
        user_avatar:'/images/avatar1.png',
        user_rating:'4.6',
        user_price:'4.99'
      },{
        user_id:2,
        user_name:'答主2',
        user_desc:'职场生活',
        user_avatar:'/images/avatar2.png',
        user_rating:'4.7',
        user_price:'4.99'
      }
    ],

    questionList: []
  },


  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  showToast: function(e) {
    wx.showToast({
      title: 'tapped button',
      icon: 'success',
      duration: 2000,
    })
  },

  onTapAsk(){
    wx.navigateTo({
      url: '../question/question',
    })
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://192.168.1.15:8080/qa/all',
      method: 'GET',
      data: {},
      success: function(res){
        console.log(res);
        var ret = res.data;

        if(ret==null){
          var toastText = 'get failed';
          wx.showToast({
            title: toastText,
            icon:'',
            duration: 2000,
          });
        } else {
        that.setData({
          questionList: ret
        })
        }
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    wx.showToast({
      title: '没有更多了',
      icon: 'success',
      duration: 2000,
    })
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})