const { createServer } = require('../server/index')
const { log } = require('../util/log')
const { openBrowser } = require('../server/lib/openBrowser')
const clear = require('clear')
// const { killProcess } = require('../server/lib/killProcessOnPort')
// 应用全局配置
const { appConfig } = require('../common/projectConfigTemplate')
const { serverUrl, port } = appConfig

module.exports = async ({ open }) => {
  clear()
  log('Strting GUI >>>>')

  try {
    const server = createServer()
    server.listen(port, function () {
      open && openBrowser(serverUrl + port)
      log('Server run on ' + serverUrl + port)
    })
  } catch (err) {
    // todo：如果端口被占用了，要换端口启动
    console.log('创建服务错误，请查看端口是否被占用')
  }
}

// 测试
// (async () => {
//   // clear()
//   log('Strting GUI >>>>')

//   try {

//     createServer(serverUrl,port);
//   } catch (err) {
//     // todo：如果端口被占用了，要换端口启动
//     if(err){
//       // 错误没有被抛出到这层~所以无法处理
//       killProcess(port);
//       createServer(serverUrl,port);
//     }
//   }
// })()
