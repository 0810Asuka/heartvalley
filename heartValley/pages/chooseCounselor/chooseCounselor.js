// pages/chooseCounselor/chooseCounselor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counselor: [
      {
        id: 1,
        avatar: "/static/images/tabs/tab-personal-current.png",
        past:1,
        state:"free",
        name: "张三",
        score: "5",
      },
      {
        id: 2,
        avatar: "/static/images/tabs/tab-personal-current.png",
        past:1,
        state:"busy",
        name: "张三",
        score: "3.6",
      },
      {
        id: 3,
        avatar: "/static/images/tabs/tab-personal-current.png",
        past:0,
        state:"free",
        name: "张三",
        score: "2.8",
      },
      {
        id: 4,
        avatar: "/static/images/tabs/tab-personal-current.png",
        past:0,
        state:"busy",
        name: "张三",
        score: "1.7",
      },
      {
        id: 5,
        avatar: "/static/images/tabs/tab-personal-current.png",
        past:1,
        state:"busy",
        name: "张三",
        score: "4",
      },
      {
        id: 6,
        avatar: "/static/images/tabs/tab-personal-current.png",
        past:0,
        state:"free",
        name: "张三",
        score: "0.3",
      },
    ]
  },

  choose(event) {
    console.log(event);
    const { state } = event.currentTarget.dataset;
    if (state === 'busy') {
      wx.showModal({
        title: '咨询师忙碌',
        content: '该咨询师当前忙碌，请问是否愿意等待？',
        confirmText: '等待',
        cancelText: '取消',
        success: (res) => {
          if (res.confirm) {
            // 用户点击等待，执行排队队列的操作
            console.log('进入排队队列');
          } else if (res.cancel) {
            // 用户点击取消，回到咨询师列表
            console.log('取消选择咨询师');
          }
        },
      });
    } else if (state === 'free') {
      wx.showModal({
        title: '确认咨询',
        content: '是否确认选择该咨询师进行咨询？',
        confirmText: '确定',
        cancelText: '取消',
        success: (res) => {
          if (res.confirm) {
            // 用户点击确定，创建咨询会话，进入会话界面
            console.log('创建咨询会话，进入会话界面');
          } else if (res.cancel) {
            // 用户点击取消，回到咨询师列表
            console.log('取消选择咨询师');
          }
        },
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})