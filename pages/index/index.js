//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    barchoiseIndex: 0,
    titleBar: ['今日', '明日', '本周', '本月', '年运', '爱情']
  },
  changeSelect: function (event) {
    this.setData({
      barchoiseIndex: event.currentTarget.dataset.index
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(userInfo)
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
