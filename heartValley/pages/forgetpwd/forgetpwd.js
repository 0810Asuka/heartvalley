// pages/forgetpwd/forgetpwd.js
import request from '../../utils/request';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    phone: '', // 手机号
    newPassword: '', // 新密码
    confirmPassword: '', // 确认密码
    verificationCode: '',//验证码
  },

  /**
   * 表单项内容发生改变
   */
  handleInput(event) {
    const type = event.currentTarget.id;
    this.setData({
      [type]: event.detail.value,
    });
  },

  /**
   * 重置密码
   */
  async resetPassword() {
    const { phone, newPassword, confirmPassword, verificationCode} = this.data;

    //手机号码需要已经注册
    if(false) {
      wx.showToast({
        title: '手机号尚未注册',
        icon: 'none',
      });
      return;
    }

    //手机号正则检验
    let phoneReg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    if(!phoneReg.test(phone)){
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none'
      })
      return;
    }

    // 新密码不为空
    if (!newPassword) {
      wx.showToast({
        title: '新密码不能为空',
        icon: 'none',
      });
      return;
    }

    // 新密码与确认密码一致
    if (newPassword !== confirmPassword) {
      wx.showToast({
        title: '新密码与确认密码不一致',
        icon: 'none',
      });
      return;
    }

    // 后端验证
    // ...
    //后端验证通过后
    {
      wx.showToast({
        title: '重置密码成功',
        icon: 'none',
      });
       //测试用直接跳转，完成后删掉
      wx.redirectTo({
        url: '/pages/login/login'
      })
    } 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  // 跳转到主页
  tologin() {
    wx.navigateTo({
      url: '/pages/index/index',
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
