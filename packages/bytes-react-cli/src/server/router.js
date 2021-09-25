const Router = require('@koa/router')

const { log } = require('../util')

const router = new Router()
router.post('/api/create', async (ctx, _next) => {
  const { installDep } = ctx.request.body
  if (installDep) {
    log('需要安装依赖')
  } else {
    log('不需要安装依赖')
  }
})

module.exports = router
