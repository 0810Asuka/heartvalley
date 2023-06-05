// pages/updateinfo/updateinfo.js
// pages/updateinfo/updateinfo.js
Page({
  data: {
    avatar: "",
    realName: "张三",
    gender:"男",
    emergencyContactName: "李四",
    emergencyContactNumber: "987654321",
  },

  chooseavatar(e) {
    this.setData({
      avatar: e.detail.avatarUrl
    });
  },

  inputRealName(e) {
    this.setData({
      realName: e.detail.value
    });
  },

  inputEmergencyName(e) {
    this.setData({
      emergencyContactName: e.detail.value
    });
  },

  inputEmergencyNumber(e) {
    this.setData({
      emergencyContactNumber: e.detail.value
    });
  },

  saveInformation() {
    // 执行保存修改操作
    const { avatar, realName, emergencyContactName, emergencyContactNumber } = this.data;

    // 做保存修改的逻辑处理
    // 可以通过调用后端接口或者其他方式将修改的信息提交保存

    // 保存成功后给出提示
    wx.showToast({
      title: "保存成功",
      icon: "success",
      duration: 2000,
      success: function () {
        // 保存成功后返回上一页或其他操作
        wx.navigateBack();
      }
    });
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
