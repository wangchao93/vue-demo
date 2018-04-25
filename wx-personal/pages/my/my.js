// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'123',
    myList:[
      {
      id:0,
      icon:"../../pages/images/my-item0.png",
      text:"提醒设置",
      content:"123456789",
      next:">"
      },
      {
        id: 1,
        icon: "../../pages/images/my-item1.png",
        text: "意见反馈",
        content: "",
        next: ">"
      },
      {
        id: 2,
        icon: "../../pages/images/my-item2.png",
        text: "关于我们",
        content: "",
        next: ">"
      },
      {
        id: 3,
        icon: "../../pages/images/my-item3.png",
        text: "联系我们",
        content: "",
        next: ">"
      },
    ]

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
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
