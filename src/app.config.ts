export default defineAppConfig({
  pages: [
    "pages/login/index",
    'pages/index/index',
    "pages/my/index",
  ],
//   tabBar: {
//     list: [
//     {
//       pagePath: "pages/index/index",
//       text: '最新',
//       iconPath: "./assets/images/aag.png",
//       selectedIconPath: "./assets/images/aag.png"
//     },{
//       pagePath: "pages/login/index",
//       text: '节点1',
//       iconPath: "./assets/images/ajb.png",
//       selectedIconPath: "./assets/images/ajb.png"
//     }],
//     'color': 'red',
//     'selectedColor': '#56abe4',
//     'backgroundColor': '#999',
//     'borderStyle': 'white'
//   },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#999',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
