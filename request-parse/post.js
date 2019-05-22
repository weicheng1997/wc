const http = require('http');

http.createServer((req, res) => {
    console.log(req.method);
    res.end('post');
})
.listen(3000, () => {
    console.log('服务运行在 3000 端口')
})
