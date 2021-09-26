const path = require('path')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const serve = require('koa-static')
const http = require('http')
const globalMethodsInit = require('./lib/global')
//
const { openBrowser } = require('./lib/openBrowser');
const { log } = require('../util/log');

const router = require('./router')

const CLIENT_PATH = path.join(__dirname, '../../dist/')



/**
* @
*/
function createServer(serverUrl,port) {
  const app = new Koa()
  app.use(bodyParser())
  app.use(serve(CLIENT_PATH))
  app.use(router.routes()).use(router.allowedMethods())
  // 初始化全局变量
  globalMethodsInit()

  const server = http.createServer(app.callback())

  try{
      server.listen(port,function() { 　
        openBrowser(serverUrl + port);
        log('Server run on ' + serverUrl + port);

    })
  }catch(err) {
    console.log('创建服务错误，请查看端口是否被占用');
    throw err;
    
  }

  
  
}




module.exports = { createServer }
