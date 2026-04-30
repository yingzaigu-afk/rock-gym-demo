Page({
  data: {
    bookingData: null
  },
  onLoad: function(options) {
    if (options.data) {
      this.setData({ bookingData: JSON.parse(options.data) })
    }
  },
  confirmPayment: function() {
    wx.showLoading({ title: '支付中...' })
    setTimeout(function() {
      wx.hideLoading()
      wx.showToast({ title: '预约成功!', icon: 'success' })
      setTimeout(function() {
        wx.switchTab({ url: '/pages/home/index' })
      }, 1500)
    }, 1500)
  },
  viewSchedule: function() {
    wx.switchTab({ url: '/pages/book/index' })
  }
})
