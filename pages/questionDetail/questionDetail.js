// pages/questionDetail/questionDetail.js
Page({

  /**
   * Page initial data
   */
  data: {
    ansname: "Lucy",//回答者姓名
    ansuserimg: "../../images/people2.jpeg",//回答者头像
    anscontent: "首先。。。其次。。。然后",//回答内容
    anstime: "2020.02.02 17.59.02", //回答时间
    ansimg:"../../images/testOrderPage.jpg",
    quesuserimg: "../../images/people1.jpeg",//提问者头像
    quesname: "Bob",//提问者姓名
    quescontent: "2020了如何选校。。。",//提问内容
    questime: "2020.02.02 17.59.02", //提问时间
    quesimg:"../../images/testOrderPage.jpg",
    listenPrice:"1",
    payStatus: false,
    price:"1",
    people:"1",
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    // payStatus: (options.payStatus == "true" ? true : false)
  },

  pay: function () {

    var that = this;
    this.setData({
      payStatus:!this.data.payStatus
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

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})