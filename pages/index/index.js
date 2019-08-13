
//获取应用实例
const app = getApp()

Page({
  data: 
  {
    goods:
      [
        {good_image:"../../images/richScan.png",good_name:" 肤质评测",good_url:"../test/test"},
        {good_image:"../../images/history.png", good_name: " 肤质历史",good_url:"../history/history"},
      ],
    value: 2,
    value1: 4,
    active: 1,
    goodsshow: [],
    goodsshow1: [],
    goodsshow2: [],
  },
  //推荐标签获取服务器数据
  onLoad: function () 
  {
    wx.request
      ({
        url: 'https://whatdoyoudo.club/api/database/recommend',
        success: (res) => {
          console.log(res.data)
          this.setData({
            goodsshow: res.data
          })
        }
      })
  
  //乳液标签获取服务器数据
    wx.request
      ({
        url: 'https://whatdoyoudo.club/api/database/commodity/viewByCategory?id=5d4cba00c55f684038ca97ca',
        success: (res) => {
          console.log(res.data)
          this.setData({
            goodsshow1: res.data
          })
        }
      })
    //面膜标签获取服务器数据
    wx.request
      ({
        url: 'https://whatdoyoudo.club/api/database/commodity/viewByCategory?id=5d4cb9ffc55f684038ca97ad',
        success: (res) => {
          console.log(res.data)
          this.setData({
            goodsshow2: res.data
          })
        }
      })

  },




  //获取用户位置
  goLocation: function () 
  {
    wx.getLocation({
      type: 'wgs84',
      altitude: true,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //rate评分
  onChange(event) {
    this.setData({
      value: event.detail
    });
  },
   //tab标签页
  onChange(event)
  {
    wx.showToast
      ({
        title: `切换到标签 ${event.detail.index + 1}`,
        icon: 'none'
      });
  },
  //rate评分1
  onChange1(event1) {
    this.setData({
      value1: event1.detail
    });
  },
})
