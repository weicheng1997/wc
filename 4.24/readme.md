- wxml是模板，{{}}是要被编译的，
你看到的不是wxml，是wxml被js data 填充编译后的页面 也叫作page
Page 不是wxml 是wxml + js + wxss的合体 compile
- setData({
    相应数据时
}) 触发重新compile

- 我们会在wxml里把所有的逻辑及对数据的渴求都表达， 在某一个页面只会显示当前状态的页面状态 跟数据相关
  状态 由数据决定 
  改变数据 1，setData 界面自动变，
  数据驱动的界面 MVVM
  数据要和界面状态唯一

- todos  
  健身 
  表单
  js    dom 加 todos [] appendChild
  data:{
      todos:[]
  }
  form submit this.setData()
- {{js 运行区域}}
- input 有意思？ => todos
  