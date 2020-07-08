// pages/orderList/orderList.js


Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    currtab: 0,
    swipertab: [{ name: '已完成', index: 0 }, { name: '待付款', index: 1 }, { name: '待回答', index: 2 }, { name: '待评价', index: 3 }],
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
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
