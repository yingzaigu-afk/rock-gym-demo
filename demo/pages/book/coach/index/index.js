var app = getApp()
Page({
  data: {
    coach: null,
    coaches: []
  },
  onLoad: function(options) {
    if (options.coach) {
      this.setData({ coach: JSON.parse(options.coach) })
    }
    this.setData({ coaches: app.globalData.coaches })
  },
  selectCoach: function(e) {
    var coach = this.data.coaches[e.currentTarget.dataset.index]
    wx.navigateBack()
  },
  autoAssign: function() {
    wx.showToast({ title: '系统将分配空闲教练', icon: 'none' })
    setTimeout(function() {
      wx.navigateBack()
    }, 1500)
  }
})
