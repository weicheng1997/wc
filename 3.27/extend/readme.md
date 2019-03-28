Person 由prototype属性来解决它自身构造之外的原形上的属性或方法
原形对象会有它的构造函数 Person.prototype.constructor属性
第三者？ 实例 
实例 跟Person 有什么关系，Person.prototype 有关系

js 实例跟类其实不是JAVA等语言的血缘关系
zl 实例 是怎么来的呢？
new Person() 出来的
1. Person 函数运行 new 的方式 ，this=>new Object();
2. zl 怎么拿到 Person.prototype原形对象上定义的方法 __proto__ 属性
3. 方法由prototype属性，值为对象 开支
4. 任何对象都有 __proto__ 指向他的原形对象
5. 原形对象上有一个额外的constrctor 属性指向谁是它的构造函数

父类的实例赋值给子类的原形对象
