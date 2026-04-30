var app = getApp()
Page({
  data: {
    coaches: [],
    selectedCoach: null,
    selectedDate: null,
    selectedTime: null,
    selectedCourseType: '进阶',
    selectedDuration: 60,
    dates: [],
    times: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
    courseTypes: [
      { name: '入门', icon: '初', desc: '零基础起步' },
      { name: '进阶', icon: '进', desc: '提升技能' },
      { name: '技巧专项', icon: '技', desc: '针对性训练' }
    ],
    durations: [30, 60, 90]
  },
  onLoad: function() {
    var coaches = app.globalData.coaches
    var today = new Date()
    var dates = []
    for (var i = 0; i < 7; i++) {
      var date = new Date(today)
      date.setDate(today.getDate() + i)
      var dayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      dates.push({
        dayName: dayNames[date.getDay()],
        dayNum: date.getDate(),
        monthName: (date.getMonth() + 1) + '月',
        date: (date.getMonth() + 1) + '月' + date.getDate() + '日'
      })
    }
    this.setData({
      coaches: coaches,
      dates: dates,
      selectedDate: dates[2],
      selectedCoach: coaches[0]
    })
  },
  selectDate: function(e) {
    this.setData({ selectedDate: this.data.dates[e.currentTarget.dataset.index] })
  },
  selectTime: function(e) {
    this.setData({ selectedTime: e.currentTarget.dataset.time })
  },
  selectCourseType: function(e) {
    this.setData({ selectedCourseType: this.data.courseTypes[e.currentTarget.dataset.index].name })
  },
  selectDuration: function(e) {
    this.setData({ selectedDuration: this.data.durations[e.currentTarget.dataset.index] })
  },
  confirmBooking: function() {
    if (!this.data.selectedTime) {
      wx.showToast({ title: '请选择时间', icon: 'none' })
      return
    }
    var bookingData = {
      coach: this.data.selectedCoach,
      date: this.data.selectedDate,
      time: this.data.selectedTime,
      courseType: this.data.selectedCourseType,
      duration: this.data.selectedDuration
    }
    wx.navigateTo({ url: '/pages/book/confirm?data=' + JSON.stringify(bookingData) })
  }
})
