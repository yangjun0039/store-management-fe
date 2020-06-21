const menuList = [
  {
    title: '概 览',
    icon: 'el-icon-menu',
    path: '/dashboard'
  },
  {
    title: '会员管理',
    icon: 'el-icon-s-custom',
    path: '/custom'
  },
  {
    title: '服务管理',
    icon: 'el-icon-s-custom',
    children: [
      {
        title: '项目管理',
        icon: 'el-icon-s-custom',
        path: '/project'
      },
      {
        title: '套餐管理',
        icon: 'el-icon-s-custom',
        path: '/package'
      }
    ]
  },
  {
    title: '交班管理',
    icon: 'el-icon-s-check'
  },
  {
    title: '提醒预约',
    icon: 'el-icon-message-solid'
  },
  {
    title: '统计报表',
    icon: 'el-icon-s-data'
  },
  {
    title: '系统设置',
    icon: 'el-icon-s-tools'
  }
]

export {
  menuList
}
