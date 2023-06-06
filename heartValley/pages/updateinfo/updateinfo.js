// pages/updateinfo/updateinfo.js
// pages/updateinfo/updateinfo.js
const app = getApp();
const phone = app.globalData.phone;
Page({
  data: {
    avatar: "",
    realName: "张三",
    gender:"male",
    emergencyContactName: "李四",
    emergencyContactNumber: "15012345678",
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

  handleGenderChange(event) {
    console.log(event.detail);
    this.setData({
    gender: event.detail.value,
    });
    },

  saveInformation() {
    // 执行保存修改操作
    const { realName, gender, emergencyContactName, emergencyContactNumber } = this.data;

    // 做保存修改的逻辑处理
    let phoneReg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;

    if (!realName) {
      wx.showToast({
        title: '真实姓名不能为空',
        icon: 'none',
      });
      return;
    }

    // 真实姓名验证逻辑
    let nameReg = /^[\u4e00-\u9fa5a-zA-Z]{2,32}$/;
    if (!nameReg.test(realName)) {
      wx.showToast({
        title: '姓名格式错误',
        icon: 'none'
      });
      return;
    }

    if (!gender) {
      wx.showToast({
      title: '请选择性别',
      icon: 'none',
      });
      return;
      }

    if (!emergencyContactName) {
      wx.showToast({
        title: '紧急联系人姓名不能为空',
        icon: 'none',
      });
      return;
    }
  
    if (!nameReg.test(emergencyContactName)) {
      wx.showToast({
        title: '紧急联系人姓名格式错误',
        icon: 'none'
      });
      return;
    }

    if (!emergencyContactNumber) {
      wx.showToast({
        title: '紧急联系人电话不能为空',
        icon: 'none',
      });
      return;
    }

    // 紧急联系人电话验证逻辑
    if(!phoneReg.test(emergencyContactNumber)){
      wx.showToast({
        title: '紧急联系人电话格式错误',
        icon: 'none'
      })
      return;
    }

    if (phone === emergencyContactNumber) {
      wx.showToast({
        title: '紧急联系人电话不能与您的手机号码重复',
        icon: 'none',
      });
      return;
    }

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