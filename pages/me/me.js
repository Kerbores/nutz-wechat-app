// pages/me/me.js
Page({
  data:{
    bind:false,
    accesstoken:null,
    user:null
  },
  onLoad:function(options){
    if(!this.data.bind){
      this.reloadPage();
    }
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  reloadPage:function(){
    wx.getStorage({
      key: 'accesstoken',
      success:(res)=>{
        this.setData({
          "accesstoken":res
        });
      }
    })
  },
  scan:function(){
    var that = this;
    wx.scanCode({
      success:function(obj){
        that.setData({
          "accesstoken":obj.result,
        });
        wx.setStorage({
          key:"accesstoken",
          data:obj.result
        });
        that.reloadPage();
      },
      fail:function(){
        wx.showToast({
          title: '扫码失败',
          icon: 'success',
          duration: 1000
        })
      }
    })
  }
})