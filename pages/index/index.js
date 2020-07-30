// pages/hello/hello.js
import api from '../../api/request'

var app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    ret: "",
    navbar: ['答主', '问题'],
    currentTab: 0,
    userList:[],
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
    var skey = wx.getStorageSync("skey")
    console.log("here comes skey")
    console.log(skey)
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
      url: api.host+api.uri.allUser,
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
          userList: ret
        })
        }
      }
    });
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
    var that = this;
    wx.request({
      url: api.host+api.uri.allQ,
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