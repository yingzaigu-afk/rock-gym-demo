App({
  globalData: {
    userInfo: {
      name: '张小明',
      phone: '138****8888',
      memberType: '季卡会员',
      memberExpiry: '2026-07-15',
      remainingHours: 12,
      monthlyCheckins: 8,
      totalRoutes: 36
    },
    coaches: [
      { id: 1, name: '李明', avatar: 'A', tags: ['进阶', '技巧'], rating: 5.0, reviews: 328, price: 300, gradient: 'orange' },
      { id: 2, name: '王丽', avatar: 'B', tags: ['入门', '亲子'], rating: 4.9, reviews: 156, price: 280, gradient: 'green' },
      { id: 3, name: '张强', avatar: 'C', tags: ['速度', '攀石'], rating: 4.8, reviews: 89, price: 260, gradient: 'blue' }
    ],
    upcomingCourses: [
      { id: 1, title: '私教课 - 进阶训练', date: '04-30', dayName: '30', monthName: '4月', time: '10:00', coach: '李教练', duration: 60, status: 'confirmed' },
      { id: 2, title: '私教课 - 技巧专项', date: '05-02', dayName: '02', monthName: '5月', time: '15:00', coach: '王教练', duration: 90, status: 'pending' }
    ],
    stats: {
      totalCheckins: 156,
      totalRoutes: 89,
      totalMinutes: 2712,
      calories: 8560,
      weeklyData: [40, 60, 35, 80, 100, 70, 50],
      rank: 'Top 15%'
    },
    competitions: [
      { id: 1, title: '巅峰挑战春季攀石赛', date: '2026-05-10', time: '09:00', location: '极限攀岩馆 - 主赛场', enrolled: 128, total: 200, projects: ['难度赛', '速度赛', '攀石赛'], price: 99, status: 'registering', gradient: 'orange' },
      { id: 2, title: '青少年攀岩入门赛', date: '2026-05-15', time: '14:00', location: '极限攀岩馆 - 青少区', enrolled: 45, total: 80, projects: ['入门组', '亲子组'], price: 0, status: 'upcoming', gradient: 'green' },
      { id: 3, title: '勇者之路月度排位赛 - 4月', date: '2026-04-26', time: '', location: '极限攀岩馆', enrolled: 156, total: 156, projects: ['难度赛', '攀石赛'], price: 50, status: 'ended', gradient: 'purple' }
    ]
  }
})
