// pages/login/login.js
const app = getApp();
import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',//手机号
    password: ''//密码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //表单项内容发生改变
  handleInput(event){
    let type = event.currentTarget.id;
    this.setData({
      [type]: event.detail.value
    })
  },
  //登录
  async login(){
    //得到数据
    let {phone,password} = this.data;
    //验证
    //手机号不为空
    if(!phone){
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none'
      })
      return;
    }
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
    //密码不为空
    if(!password){
      wx.showToast({
        title: '密码不能为空',
        icon: 'none'
      })
      return;
    }
    //后端验证
    //验证通过后，将用户手机号设置为全局变量phone的值
    app.globalData.phone = phone;
    //测试用直接跳转，完成后删掉
     wx.redirectTo({
       url: '/pages/index/index'
     })
   },
  //跳转到忘记密码界面
  toforgetpwd(){
    wx.navigateTo({
      url: '/pages/forgetpwd/forgetpwd',
    })
  },

  //跳转到注册界面
  toregister(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})