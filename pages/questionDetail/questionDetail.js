// pages/questionDetail/questionDetail.js
Page({

  /**
   * Page initial data
   */
  data: {
    ansname: "Lisa",//回答者姓名
    ansuserimg: "https://i.ibb.co/t3BWd6f/image.jpg",//回答者头像
    anscontent: "首先可以考虑是去美国还是欧洲，尤其是考虑到现在的疫情影响，所以……",//回答内容
    anstime: "2020.02.02 17.59.02", //回答时间
    ansimg:"../../images/testOrderPage.jpg",
    quesuserimg: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIypiccMxicMfqeYab8ekRfh2BV37c64ffhsJtGKb6TVTEqEkaMQHz98BtINgDcNakJzrgoNWVOHBDA/132",//提问者头像
    quesname: "NPC",//提问者姓名
    quescontent: "请问2020秋季留学如何选校。。。",//提问内容
    questime: "2020.02.02 17.59.02", //提问时间
    quesimg:"../../images/testOrderPage.jpg",
    listenPrice:"1",
    payStatus: false,
    price:"1",
    people:"1",
  },

  /**
  //  * Lifecycle function--Called when page load
  //  */
  // onLoad: function (options) {
  //   var that=this
  //   var img = JSON.parse(options.img);
  //   var username = JSON.parse(options.username);
  //   that.setData({
  //     ansuserimg: img,
  //     ansname: username,
  //   })
  // },

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