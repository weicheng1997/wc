- readdir
  读目录里内容   IO操作异步
  readdirSync               Async异步  sync同步
  js 是单线程的，用回调或Promise,释放线程的控制权， 主要因为js是前端DOM的编程，用户交互比较多，等
  到执行完后，通过event-loop机制，拿回控制权(callback resolve)
  来到了node ,js获取了服务器端的能力，
  readdirSync()