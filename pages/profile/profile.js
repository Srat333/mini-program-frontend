//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hasUserInfo: false,
    currtab: 0,
    swipertab: [{ name: '已完成', index: 0 }, { name: '待付款', index: 1 }, { name: '待回答', index: 2 }, { name: '待评价', index: 3 }],
  },

  onLoad: function () {
    // 页面加载时使用用户授权逻辑，弹出确认的框
    this.userAuthorized()
  },

  userAuthorized() {
    wx.getSetting({
      success: data => {
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: data => {
              this.setData({
                hasUserInfo: true,
                userInfo: data.userInfo
              })
            }
          })
        } else {
          this.setData({
            hasUserInfo: false
          })
        }
      }
    })
  },

  onGetUserInfo(e) {
    const userInfo = e.detail.userInfo
    if (userInfo) {
      // 1. 小程序通过wx.login()获取code
      wx.login({
        success: function(login_res) {
          //获取用户信息
          wx.getUserInfo({
            success: function(info_res) {
              // 2. 小程序通过wx.request()发送code到开发者服务器
              wx.request({
                url: 'http://localhost:8080/wx/login',
                method: 'POST',
                header: {
                  'content-type': 'application/x-www-form-urlencoded'
                },
                data: {
                  code: login_res.code, //临时登录凭证
                  rawData: info_res.rawData, //用户非敏感信息
                  signature: info_res.signature, //签名
                  encrypteData: info_res.encryptedData, //用户敏感信息
                  iv: info_res.iv //解密算法的向量
                },
                success: function(res) {
                  if (res.data.status == 200) {
                    // 7.小程序存储skey（自定义登录状态）到本地
                    wx.setStorageSync('userInfo', userInfo);
                    wx.setStorageSync('skey', res.data.data);
                  } else{
                    console.log('服务器异常');
                  }
                },
                fail: function(error) {
                  //调用服务端登录接口失败
                  console.log(error);
                }
              })
            }
          })
        }
      })
      this.setData({
        hasUserInfo: true,
        userInfo: userInfo
      })
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
