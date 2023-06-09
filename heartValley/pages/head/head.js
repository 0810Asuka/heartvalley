// pages/head/head.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: "/static/images/tabs/tab-personal-current.png",
    name: "咨询师",
    state: "ongoing",
    time: "00:00:00", // 初始化时间
    timer: null, // 定时器
    startTime: 0, // 计时开始时间
  },

  complete() {
    // 停止计时
    clearInterval(this.data.timer);
    this.setData({
      state: "finished",
      timer: null,
      time: this.formatTime(new Date() - this.data.startTime),
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 开始计时
    this.startTimer();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // 清除计时器
    clearInterval(this.data.timer);
  },

  /**
   * 开始计时
   */
  startTimer() {
    // 记录开始时间
    this.setData({
      startTime: new Date(),
    });

    // 更新计时器
    this.data.timer = setInterval(() => {
      const currentTime = new Date() - this.data.startTime;
      this.setData({
        time: this.formatTime(currentTime),
      });
    }, 1000);
  },

  /**
   * 格式化时间为 xx:xx:xx 的格式
   */
  formatTime(time) {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / 1000 / 60 / 60) % 24);
    return (
      this.formatNumber(hours) +
      ":" +
      this.formatNumber(minutes) +
      ":" +
      this.formatNumber(seconds)
    );
  },

  /**
   * 格式化数字为两位数
   */
  formatNumber(num) {
    return num < 10 ? "0" + num : num;
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