不再写css，写的是css的预编译语言stylus
快
一套语法，支持现代css开发，
compile过程
stylus style.styl -o style.css
-o 是output的简写 输出的
stylus -w style.styl -o style.css
-w是watch 一直监听style.styl文件的修改，实时的生成style.css

1. 跟css 的规则说BYEBYE
{}:;tab
2. stylus 提供嵌套功能
 可以帮我们补上前面的选择器
 现在我们的css模块化了，从此css就有变成感觉了
3. &运算符
 依然使用tab缩进，但是与上一级同级，适合于同一个元素多个类名 .active 或者伪类，伪状态
4. 变量定义
 将常用的，重复使用的
 css不是编程语言，表达性的
 在最上面，统一定义后，可以修改一处，所有使用了此变量的地方都会跟着修改
 成为网站的风格

css 语法
 1. overflow:hidden
 2. flex align-items 搞定vertical-align有时不好搞的情况
 vertical-align 兄弟之间 img +兄弟节点
 3. text-rendering:optimizeLegibility;抗锯齿 在高清手机上文字不模糊
 4. flex_shrink:0
    flex-grow
 5. 第几个元素的选择
    :first0child  :last-child
    :nth-child(2n) :nth-child(2n+1)
 6. -apple-system





 vertical-align middle 用于对齐
         display inline-flex
        align-items center   弹性布局的对齐