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
        rating: "满意",
      },
      {
        id: 2,
        time: "2023-05-02",
        counselor: {
          avatar: "",
          name: "李四",
        },
        duration: "45分钟",
        rating: "非常满意",
      },
      {
        id: 3,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "满意",
      },
      {
        id: 4,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "满意",
      },
      {
        id: 5,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "满意",
      },
      {
        id: 6,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "满意",
      },
      {
        id: 7,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "满意",
      },
      {
        id: 8,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "满意",
      },
      {
        id: 9,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "满意",
      },
      {
        id: 10,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "满意",
      },
      {
        id: 11,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "满意",
      },
      {
        id: 12,
        time: "2023-05-01",
        counselor: {
          avatar: "",
          name: "张三",
        },
        duration: "30分钟",
        rating: "满意",
      }
      // ...
    ],
  },

  goToConsultation() {
    wx.navigateTo({
      url: "/pages/waiting/waiting",
    });
  },

  goToRecordDetails(event) {
    const recordId = event.currentTarget.dataset.recordId;
    wx.navigateTo({
      url: `/pages/record/record?id=${recordId}`,
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

