const path = require('path')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const serve = require('koa-static')
const http = require('http')
const globalMethodsInit = require('../lib/global')

const router = require('./router')

const CLIENT_PATH = path.join(__dirname, '../../dist/')

function createServer() {
  const app = new Koa()
  app.use(bodyParser())
  app.use(serve(CLIENT_PATH))
  app.use(router.routes()).use(router.allowedMethods())
  // 初始化全局变量
  globalMethodsInit()

  const server = http.createServer(app.callback())
  return server
}

module.exports = { createServer }
