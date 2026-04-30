var app = getApp()
Page({
  data: {
    stats: null
  },
  onLoad: function() {
    this.setData({ stats: app.globalData.stats })
  }
})
