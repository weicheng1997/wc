// 会计 年终奖 
// 绩效 S 5  A 3 B 2 C 1 D 0
// 一个个的策略函数
var performanceX= function(salary){
    return salary*60;
}
var performanceS = function(salary){
    return salary*5;
}
var performanceA = function(salary){
    return salary*3;
}
var performanceB = function(salary){
    return salary*2;
}
var calculateBounce = function (performanceLevel, salary) {
    if (performanceLevel === 'X') {
        return performanceX(salary)
    }
    if (performanceLevel === 'S') {
        return performanceS(salary)
    }
    if (performanceLevel === 'A') {
        return performanceA(salary)
    }
    if (performanceLevel === 'B') {
        return performanceB(salary)
    }
}
// 可以如何优化？分支太多，计算策略太简陋了 会计发钱的 ，制定发钱策略的区分开来
console.log(calculateBounce("X", 20000))