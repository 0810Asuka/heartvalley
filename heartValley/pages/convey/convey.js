// pages/convey/convey.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    consultationRecords: [
      { id: 1, consultant: "张三", time: "2023/06/09 13:54:09" },
      { id: 2, consultant: "李四", time: "2023/06/10 14:23:45" },
      { id: 3, consultant: "王五", time: "2023/06/11 15:37:21" },
      { id: 4, consultant: "王五", time: "2023/06/11 15:37:21" },
      { id: 5, consultant: "天下第一", time: "2023/06/11 15:37:21" },
      { id: 6, consultant: "王五", time: "2023/06/11 15:37:21" },
      { id: 7, consultant: "王五", time: "2023/06/11 15:37:21" },
      { id: 8, consultant: "王五", time: "2023/06/11 15:37:21" },
      { id: 9, consultant: "王富贵", time: "2023/06/11 15:37:21" },
      { id: 10, consultant: "王五", time: "2023/06/11 15:37:21" },
      { id: 11, consultant: "王五", time: "2023/06/11 15:37:21" },
      { id: 12, consultant: "王五", time: "2023/06/11 15:37:21" },
      { id: 13, consultant: "王五", time: "2023/06/11 15:37:21" },
      { id: 14, consultant: "王五", time: "2023/06/11 15:37:21" },
    ],
    
    selectedRecords: []
  },

  checkboxChange(event) {
    this.setData({ selectedRecords: event.detail.value });
  },

  sendRecords() {
    if (this.data.selectedRecords.length === 0) {
      wx.showToast({
        title: '请选择咨询记录',
        icon: 'none'
      });
    } else {
      console.log('选中的咨询记录的id:', this.data.selectedRecords);
      wx.navigateBack();
    }
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