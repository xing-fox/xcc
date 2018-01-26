//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    latitude: '',
    longitude: ''
  },
  onLoad: function () {
    var that = this
    //获取当前点位地图信息
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })    
  }
})
