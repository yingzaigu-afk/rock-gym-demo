var app = getApp()
Page({
  data: {
    competitions: [],
    activeTab: 0,
    tabs: ['正在进行', '即将开始', '往期回顾']
  },
  onLoad: function() {
    this.setData({ competitions: app.globalData.competitions })
  },
  switchTab: function(e) {
    this.setData({ activeTab: e.currentTarget.dataset.index })
  },
  registerCompetition: function(e) {
    var competition = this.data.competitions[e.currentTarget.dataset.index]
    if (competition.price === 0) {
      wx.showToast({ title: '报名成功!', icon: 'success' })
    } else {
      wx.showToast({ title: '即将跳往支付', icon: 'none' })
    }
  }
})
