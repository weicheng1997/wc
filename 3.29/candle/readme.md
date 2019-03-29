filter:blur() 设置高斯模糊效果
filter:constrast() 调整图像对比度
边与边接触的时候，边界融合，对比度滤镜把高斯模糊的模糊边缘给干掉



1. mixin 与函数的区别
    mixin 时一段样式的封装，可以在引用的地方复用stylus 是用的最多的
    函数有返回值 ,random(min,max)
2. stylus 内置的函数库 
    floor math(0,'random')
    unit(,'px')
3. 200个元素 stylus for 
    for num in 1..200
        .g-ball:nth-child({num})
            $width = random(0,40)
            width unit($width,'px')
4. filter constrast(20)
    mix-blend-mode: screen;
    