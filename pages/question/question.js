// pages/question/question.js

import { promisify } from '../../utils/promise.util'
import { $init, $digest } from '../../utils/common.util'

const wxUploadFile = promisify(wx.uploadFile)

Page({

  data: {
    focus: false,
    inputValue: '',
    titleCount: 0,
    contentCount: 0,
    title: '',
    content: '',
    catagory: '',
    tag: '',
    images: [],
  },

  ///////////question-input///////////////////////
  onLoad(options) {
    $init(this)
  },

  handleTitleInput(e) {
    const value = e.detail.value
    this.data.title = value
    this.data.titleCount = value.length
    $digest(this)
  },

  handleContentInput(e) {
    const value = e.detail.value
    this.data.content = value
    this.data.contentCount = value.length
    $digest(this)
  },
  showToast: function(e) {
    wx.showToast({
      title: 'tapped button',
      icon: 'success',
      duration: 2000,
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  },

  // 图片模块
  chooseImage(e) {
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        const images = this.data.images.concat(res.tempFilePaths)
        this.data.images = images.length <= 3 ? images : images.slice(0, 3)
        $digest(this)
      }
    })
  },

  removeImage(e) {
    const idx = e.target.dataset.idx
    this.data.images.splice(idx, 1)
    $digest(this)
  },

  handleImagePreview(e) {
    const idx = e.target.dataset.idx
    const images = this.data.images

    wx.previewImage({
      current: images[idx],
      urls: images,
    })
  },


createQuestion(e) {
  wx.request({
    url : "http://192.168.1.15:8080/qa/add",
    method: "POST",
    data: {
      title : JSON.stringify(this.data.title),
      content: JSON.stringify(this.data.content),
      category: JSON.stringify(this.data.catagory),
      tag: JSON.stringify(this.data.tag),
    },
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    success: function (res) {
      console.log(res.data);
      wx.navigateBack({
        delta: 1  //小程序关闭当前页面返回上一页面
      })
      wx.showToast({
        title: '请教成功！',
        icon: 'success',
        duration: 2000
      })
    },
  })
},

  // 提交表单
  submitForm(e) {
    const title = this.data.title
    const content = this.data.content

    if (title && content) {
      const arr = []

      //将选择的图片组成一个Promise数组，准备进行并行上传
      for (let path of this.data.images) {
        console.log("getting image path");
        console.log(path);
        arr.push(wxUploadFile({
          url: 'http://192.168.1.15:8080/qa/upload',
          filePath: path,
          name: 'file',
        }))
      }

      wx.showLoading({
        title: '正在创建...',
        mask: true
      })

      // 开始并行上传图片
      Promise.all(arr).then(res => {
        // 上传成功，获取这些图片在服务器上的地址，组成一个数组
        return res.map(item => JSON.parse(item.data).url)
      }).catch(err => {
        console.log(">>>> upload images error:", err)
      }).then(urls => {
        // 调用保存问题的后端接口
        return this.createQuestion();

      }).then(res => {
        wx.showToast({
          title: 'success',
        })
      }).catch(err => {
        console.log(">>>> create question error:", err)
      }).then(() => {
        wx.hideLoading()
      })
    }
  }

})

