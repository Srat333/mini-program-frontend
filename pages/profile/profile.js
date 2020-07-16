//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: true,
    currtab: 0,
    swipertab: [{ name: '已完成', index: 0 }, { name: '待付款', index: 1 }, { name: '待回答', index: 2 }, { name: '待评价', index: 3 }],
  },

  onLoad: function () {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
              wx.login({
                success: res => {
                  // 获取到用户的 code 之后：res.code
                  console.log("用户的code:" + res.code);
                  //调用后端，获取微信的session_key,secret
                  wx.request({
                    url: "http://192.168.1.15:8080/qa/wxLogin?code=" + res.code,
                    method: "POST",
                    success: function (result) {
                      console.log(result);
                    }
                  })
                }
              });
            }
          });
        } else {
          // 用户没有授权
          // 改变 isHide 的值，显示授权页面
          that.setData({
            isHide: true
          });
        }
      }
    });
  },

  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      that.setData({
        isHide: false,
        userInfo: e.detail.userInfo,
      });
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 页面渲染完成
    this.getDeviceInfo()
    this.orderShow()
  },
 
  getDeviceInfo: function () {
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          deviceW: res.windowWidth,
          deviceH: res.windowHeight
        })
      }
    })
  },
 
  /**
  * @Explain：选项卡点击切换
  */
  tabSwitch: function (e) {
    var that = this
    if (this.data.currtab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        currtab: e.target.dataset.current
      })
    }
  },
 
  tabChange: function (e) {
    this.setData({ currtab: e.detail.current })
    this.orderShow()
  },
 
  orderShow: function () {
    let that = this
    switch (this.data.currtab) {
      case 0:
        that.alreadyShow()
        break
      case 1:
        that.waitPayShow()
        break
      case 2:
        that.waitAnsShow()
        break
      case 3:
        that.waitComShow()
        break
    }
  },
  alreadyShow: function(){
    this.setData({
      alreadyOrder: [{ name: "关于选学校选专业.....", state: "交易成功", time: "2020-09-30 14:00-16:00", url: "../../images/testOrderPage.jpg", money: "10" }, { name: "关于选学校选专业.....", state: "交易成功", time: "2020-09-30 14:00-16:00", url: "../../images/testOrderPage.jpg", money: "10" }]
    })
  },
 
  waitPayShow:function(){
    this.setData({
      waitPayOrder: [{ name: "关于选学校选专业......", state: "待付款", time: "2020-09-30 14:00-16:00",  url: "../../images/testOrderPage.jpg", money: "10" }, { name: "关于选学校选专业......", state: "待付款", time: "2020-09-30 14:00-16:00", url: "../../images/testOrderPage.jpg", money: "10" }],
    })
  },
 
  waitAnsShow: function () {
    this.setData({
      waitAnsOrder: [{ name: "关于选学校选专业......", state: "待回答", time: "2020-09-30 14:00-16:00",  url: "../../images/testOrderPage.jpg", money: "10" }, { name: "关于选学校选专业......", state: "待回答", time: "2020-09-30 14:00-16:00", url: "../../images/testOrderPage.jpg", money: "10" }],
    })
  },

  waitComShow: function () {
    this.setData({
      waitComOrder: [{ name: "关于选学校选专业......", state: "待评价", time: "2020-09-30 14:00-16:00",  url: "../../images/testOrderPage.jpg", money: "10" }, { name: "关于选学校选专业......", state: "待评价", time: "2020-09-30 14:00-16:00", url: "../../images/testOrderPage.jpg", money: "10" }],
    })
  },
})
