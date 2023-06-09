// pages/register/register.js
import request from '../../utils/request';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '', // 手机号
    password: '', // 密码
    confirmPassword: '', // 确认密码
    realName: '', // 真实姓名
    gender: '',//性别
    emergencyPhone: '', // 紧急联系人电话
    emergencyName: '', // 紧急联系人姓名
    verificationCode: '', // 验证码
  },

  handleInput(event) {
    const type = event.currentTarget.id;
    this.setData({
      [type]: event.detail.value,
    });
  },

  handleGenderChange(event) {
    console.log(event.detail);
    this.setData({
    gender: event.detail.value,
    });
    },
  //注册
  async register() {
    // 获取数据
    let {
      phone,
      password,
      confirmPassword,
      realName,
      gender,
      emergencyPhone,
      emergencyName,
      verificationCode,
    } = this.data;

    // 执行注册逻辑
    if (!phone) {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
      });
      return;
    }

    // 手机号验证逻辑
    //正则验证是一个手机号
    //正则表达式
    let phoneReg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    if(!phoneReg.test(phone)){
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none'
      })
      return;
    }
    //如果手机号已被注册，提示注册过（需要后端协助）
    if(false){
      wx.showToast({
        title: '该手机号码已被注册',
        icon: 'none',
      });
      return;
    }

    if (!password) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none',
      });
      return;
    }

    if (password !== confirmPassword) {
      wx.showToast({
        title: '两次输入的密码不一致',
        icon: 'none',
      });
      return;
    }

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

    if (!emergencyPhone) {
      wx.showToast({
        title: '紧急联系人电话不能为空',
        icon: 'none',
      });
      return;
    }

    // 紧急联系人电话验证逻辑
    if(!phoneReg.test(emergencyPhone)){
      wx.showToast({
        title: '紧急联系人电话格式错误',
        icon: 'none'
      })
      return;
    }

    if (phone === emergencyPhone) {
      wx.showToast({
        title: '紧急联系人电话不能与您的手机号码重复',
        icon: 'none',
      });
      return;
    }

    if (!emergencyName) {
      wx.showToast({
        title: '紧急联系人姓名不能为空',
        icon: 'none',
      });
      return;
    }

    if (!nameReg.test(emergencyName)) {
      wx.showToast({
        title: '紧急联系人姓名格式错误',
        icon: 'none'
      });
      return;
    }

    if (!verificationCode) {
      wx.showToast({
        title: '验证码不能为空',
        icon: 'none',
      });
      return;
    } 
    //后端验证通过后
    {
      wx.showToast({
        title: '注册成功',
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