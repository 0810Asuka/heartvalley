// pages/consultation/consultation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sessionList: [
      {
        id: 1,
        avatar: "/static/images/tabs/tab-personal-current.png",
        name: "咨询师A",
        time: "2023-05-07 15:30:25",
        message: "用户A：你好，我有一个问题想咨询一下。我有一个问题想咨询一下。我有一个问题想咨询一下。我有一个问题想咨询一下。",
      },
      {
        id: 2,
        avatar: "/static/images/tabs/tab-personal-current.png",
        name: "咨询师B",
        time: "2023-05-07 14:20:10",
        message: "用户B：我最近感觉很焦虑，不知道该怎么办。",
      },
      {
        id: 3,
        avatar: "/static/images/tabs/tab-personal-current.png",
        name: "咨询师C",
        time: "2023-05-07 10:45:55",
        message: "用户C：你好，请问你有时间进行咨询吗？",
      },
      {
        id: 7,
        avatar: "/static/images/tabs/tab-personal-current.png",
        name: "咨询师A",
        time: "2023-05-07 15:30:25",
        message: "用户A：你好，我有一个问题想咨询一下。我有一个问题想咨询一下。我有一个问题想咨询一下。我有一个问题想咨询一下。",
      },
      {
        id: 4,
        avatar: "/static/images/tabs/tab-personal-current.png",
        name: "咨询师B",
        time: "2023-05-07 14:20:10",
        message: "用户B：我最近感觉很焦虑，不知道该怎么办。",
      },
      {
        id: 5,
        avatar: "/static/images/tabs/tab-personal-current.png",
        name: "咨询师A",
        time: "2023-05-07 15:30:25",
        message: "用户A：你好，我有一个问题想咨询一下。我有一个问题想咨询一下。我有一个问题想咨询一下。我有一个问题想咨询一下。",
      },
      {
        id: 6,
        avatar: "/static/images/tabs/tab-personal-current.png",
        name: "咨询师B",
        time: "2023-05-07 14:20:10",
        message: "用户B：我最近感觉很焦虑，不知道该怎么办。",
      }
    ],
  },
  //改动todetail函数，查看完整聊天记录
  todetail(){
    console.log("success");
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