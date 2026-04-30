var app = getApp()
Page({
  data: {
    userInfo: null,
    upcomingCourses: [],
    stats: null
  },
  onLoad: function() {
    this.setData({
      userInfo: app.globalData.userInfo,
      upcomingCourses: app.globalData.upcomingCourses,
      stats: app.globalData.stats
    })
  },
  goToBook: function() {
    wx.switchTab({ url: '/pages/book/index' })
  },
  goToData: function() {
    wx.switchTab({ url: '/pages/data/index' })
  },
  goToCompetition: function() {
    wx.switchTab({ url: '/pages/competition/index' })
  }
})
