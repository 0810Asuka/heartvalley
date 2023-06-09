// pages/index/index.js
Page({
  data: {
    consultationRecords: [
      {
        id: 1,
        time: "2023-05-01",
        counselor: {
          avatar: "/static/images/tabs/tab-personal-current.png",
          name: "张三",
        },
        duration: "30分钟",
        rating: "4",
      },
      {
        id: 2,
        time: "2023-05-02",
        counselor: {
          avatar: "",
          name: "李四",
        },
        duration: "45分钟",
        rating: "5",
      },
      {
        id: 3,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "4",
      },
      {
        id: 4,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "4",
      },
      {
        id: 5,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "4",
      },
      {
        id: 6,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "4",
      },
      {
        id: 7,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "4",
      },
      {
        id: 8,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "4",
      },
      {
        id: 9,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "4",
      },
      {
        id: 10,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "4",
      },
      {
        id: 11,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "4",
      },
      {
        id: 12,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "4",
      }
      // ...
    ],
  },

  goToConsultation() {
    wx.navigateTo({
      url: "/pages/waiting/waiting",
    });
  },

  goToevaluation(event) {
    const { id, time, name, avatar, rating } = event.currentTarget.dataset;
    const encodedId = encodeURIComponent(id);
    const encodedTime = encodeURIComponent(time);
    const encodedName = encodeURIComponent(name);
    const encodedAvatar = encodeURIComponent(avatar);
    const encodedRating = encodeURIComponent(rating);
  
    wx.navigateTo({
      url: `/pages/evaluation/evaluation?id=${encodedId}&time=${encodedTime}&name=${encodedName}&avatar=${encodedAvatar}&rating=${encodedRating}`,
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

