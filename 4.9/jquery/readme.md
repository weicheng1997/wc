DOM 树 有html解构 再加上CSS，DOM树将被生成，静态页面就有了。document DOMContentLoaded 有了元素结点，就可以做JS的交互了
页面上还依赖于其它的一些资源 js，阻塞下载，  img是网页性能的杀手
window.onload 此时写js就晚了 
如果不等事件的发生， js 操作有可能无效