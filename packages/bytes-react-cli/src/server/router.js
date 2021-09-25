const Router = require('@koa/router')

const { getProjectStatus } = require('./controller/project')

const router = new Router()
router.get('/api/project/getProjectStatus', getProjectStatus)

module.exports = router
