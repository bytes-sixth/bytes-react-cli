const Router = require('@koa/router')

const { getProjectStatus } = require('./controller/project')

// const { log } = require('../util')
// async (ctx, _next) => {
//   const { installDep } = ctx.request.body
//   if (installDep) {
//     log('需要安装依赖')
//   } else {
//     log('不需要安装依赖')
//   }
// }

const router = new Router()
router.get('/api/project/getProjectStatus', getProjectStatus)

module.exports = router
