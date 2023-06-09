// pages/evaluation/evaluation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    time: "",
    name:"",
    avatar:"",
    rating: "",
    //evaluation是评价内容，这里设置为静态，后端通过记录的主键获取
    evaluation:"这是一条测试用评价这是一条测试试用评价这是一条测试用评价这是一条测试用评价这是一条一条测试用评价这是一条测试用评价这是一条测试用评价这是一条测试用评价这是一条测试用评价这是一条测试用评价这是一条测试试用评价这是一条测试用评价这是一条测试用评价这是一条测试用评价这是是一条测试用评价这是一条测试用评价"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = decodeURIComponent(options.id);
    const time = decodeURIComponent(options.time);
    const name = decodeURIComponent(options.name);
    const avatar = decodeURIComponent(options.avatar);
    const rating = decodeURIComponent(options.rating);

    this.setData({
      id: id,
      time: time,
      name: name,
      avatar: avatar,
      rating: rating
    });

    console.log(id, time, name, avatar, rating);

    // 进行评价页面的初始化操作
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