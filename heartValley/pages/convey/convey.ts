// pages/convey/convey.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    records: [
      { id: 1, consultant: '张三', time: '2023/06/09 13:54:09' },
      { id: 2, consultant: '李四', time: '2023/06/10 09:15:22' },
      { id: 3, consultant: '王五', time: '2023/06/11 17:32:45' }
    ],
    selectedRecords: []
  },

  sendRecords() {
    for (const record of this.data.selectedRecords) {
      console.log('发送咨询记录的id:', record);
    }
  },

  selectRecord(event) {
    const { value } = event.detail;
    const { selectedRecords } = this.data;
    if (value) {
      selectedRecords.push(value);
    } else {
      const index = selectedRecords.indexOf(value);
      if (index !== -1) {
        selectedRecords.splice(index, 1);
      }
    }
    this.setData({ selectedRecords });
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