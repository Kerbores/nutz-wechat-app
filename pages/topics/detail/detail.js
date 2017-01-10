// pages/topics/detail/detail.js
Page({
  data:{
    id:null,
    topic:null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData(options);
    wx.request({
      url: 'https://nutz.cn/yvr/api/v1/topic/'+this.data.id, 
      data:{
        "mdrender":false
      },
      success: (res)=>{
        this.setData({
          "topic":res.data.data
        });
        console.log(this.data.topic);
      }
    });
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
  }
})