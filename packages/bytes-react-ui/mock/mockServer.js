const Koa = require('koa')
const Router = require('koa-router')
const config = require('../config/config.dev')

const mockUrl = config.mockServer.host + ':' + config.mockServer.ports[0]

const app = new Koa()
let routerHome = new Router()

let router = new Router()

routerHome.get('/hello', async ctx => {
  ctx.body = 'hello'
})
router.use('/api', routerHome.routes(), routerHome.allowedMethods())

app.use(router.routes()).use(router.allowedMethods())

app.listen(config.mockServer.ports[0])
