一万条数据，要插入达到网页中，怎么做
DOM 注意
- 内存开销最大的在动态DOM上
  DOM开销是最耗内存的
  createElement
  问 优化方式是什么
- cloneNode 节点克隆
- innerHTML
  10000条DOM显示是负担
  延迟加载（用于图片）
  分屏加载html
  绘制HTML 重绘和重排 导致网页卡顿

- 不能一下搞定 分屏加载
  一万条数据
  - 数据分页 page 上一页的数据 当前页的数据 下一页的数据
    前端自主分页
  - 防抖 + onscroll 
    跟onReachBottom一样
    当前的数据，超出了视窗 viewport
    
      
