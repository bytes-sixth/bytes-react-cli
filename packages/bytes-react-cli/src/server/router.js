const Router = require('@koa/router')

const { getProjectStatus, createProject } = require('./controller/project')
const { getDirectionListOfPath, getStartCliPath } = require('./controller/file')

const router = new Router()

/**
 *  @description 获取创建项目的状态
 */
router.get('/api/project/getProjectStatus', getProjectStatus)

/**
 *  @description 将数据放在请求体中，创建项目
 */
router.get('/api/project/createProject', createProject)
router.post('/api/project/createProject', createProject)
router.put('/api/project/createProject', createProject)

/**
 *@description 获取某文件夹路径下的所有文件夹
 */
router.get('/api/file/getDirectionListOfPath', getDirectionListOfPath)
/**
 *@description 获取启动项目的路径
 */
router.get('/api/file/getStartCliPath', getStartCliPath)

module.exports = router
