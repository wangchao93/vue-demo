// pages/add/add.js
var util = require('../../utils/util.js')
const app=getApp()
Page({
  data: {
    date1: '',
    time1: '',
    date2: '',
    time2: '',
    index: 0,
    addList: [
      {
        id: 0,
        text: "提醒",
        content: "1小时前",
        next: ">"
      },
      {
        id: 0,
        text: "日历",
        content: "工作",
        next: ">"
      },
      {
        id: 0,
        text: "重复",
        content: "不重复",
        next: ">"
      },
    ]
  },

  onLoad: function (e) {
    this.setData({
      date1: util.formatTime1(new Date),
      date2: util.formatTime1(new Date),
      time1: util.formatTime2(new Date),
      time2: util.formatTime2(new Date)
    })
  },
  //  点击时间组件确定事件  
  bindTimeChange1: function (e) {
    this.setData({
      time1: e.detail.value
      
    })
  },
  bindTimeChange2: function (e) {
    this.setData({
      time2: e.detail.value

    })
  },
  //  点击日期组件确定事件  
  bindDateChange1: function (e) {
    this.setData({
      date1: e.detail.value
     
    })
  },
  bindDateChange2: function (e) {
    this.setData({
      date2: e.detail.value

    })
  },
 
})
