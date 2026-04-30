var app = getApp()
Page({
  data: {
    userInfo: null
  },
  onLoad: function() {
    this.setData({ userInfo: app.globalData.userInfo })
  },
  navigateTo: function(e) {
    var page = e.currentTarget.dataset.page
    wx.showToast({ title: '功能开发中', icon: 'none' })
  }
})
