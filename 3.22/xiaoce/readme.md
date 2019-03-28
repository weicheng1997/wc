## 界面搭框架及经验

1. 水平方向一般禁止滚动条，垂直方向出现滚动条         
        overflow-x:hidden;
        overflow-y:scroll;
        - 水平和垂直两个方向都滚动，页面会摇晃，容易产生误操作
        - 垂直方向一直滚动是开发的趋势

    -margin:0 auto;max-width:960px 通用    
    -flex布局
    flex-grow放大 flex-basis flex-shrink缩小 flex-wrap
    当网页由pc到mobile时，缩小阵仗

经验 简单的适配pc到mobile 照顾所有的用户，让网页在所有的设备都能用，
在pc端大手大脚一点，max-witdh magin:auto  多使用padding margin使页面稍微空一点
在mobile 用flex-shrink 让关键部分坚挺一点