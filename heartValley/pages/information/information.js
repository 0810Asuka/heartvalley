// pages/information/information.js
const app = getApp();
const phone = app.globalData.phone;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: "",
    realName: "张三",
    contactNumber: phone,
    emergencyContactName: "李四",
    gender:"male",
    emergencyContactNumber: "15012345678",
  },

  chooseavatar(e){
    this.setData({
      avatar: e.detail.avatarUrl
    })
},

  modifyInformation() {
    wx.navigateTo({
      url: "/pages/updateinfo/updateinfo",
    });
  },

  logout() {
    wx.showModal({
      title: '确认退出',
      content: '是否确认退出登录？退出后下次登录时将重新验证您的身份',
      success: (res) => {
        if (res.confirm) {
          // 用户点击了确认按钮
          // 执行退出登录操作
          // ...
  
          // 跳转到登录界面
          wx.clearStorageSync();
          wx.reLaunch({
            url: '/pages/login/login',
          });
        } else if (res.cancel) {
          // 用户点击了取消按钮
          // 不执行任何操作
        }
      },
    });
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
   
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
    this.setData({
      contactNumber: app.globalData.phone,
    });
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