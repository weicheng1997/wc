// fs 模块  相当于前端window...  是node开发的一部分
const fs = require('fs');
// 读取文件是异步的,
// fs.readFile('./a.txt','utf8',function(err,data){
//     console.log(data);
//     if(err){
//         console.log(err);
//     }
//     fs.readFile('./b.txt','utf8',function(err,data){
//         console.log('-------------------------------------',data);
//     })
// });


// 将callback处理异步的方案抛弃，
const fileAPromise = new Promise(
    (resolve, reject) => {
        //耗时任务
        fs.readFile('./a.txt', 'utf8', (err, data) => {
            // 流程的控权怎么移交
            resolve(data);
        })
    });
const fileBPromise = new Promise(
    (resolve, reject) => {
        fs.readFile('./b.txt', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data)
        })
    }
);
// 将内部的耗时任务运行起来
fileAPromise.then(data => {
    console.log(data);
    return fileBPromise;
})
.then(data =>{
    console.log(data);
});
