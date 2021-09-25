const sndResponse = require('../lib/sendResponse')
const { PROJECT_STATUS_WAITING } = require('../lib/define')

/**
 *  @description 获取创建项目的状态
 */
const getProjectStatus = async (ctx, _next) => {
  sndResponse(ctx.response)(global.createProjectStatus)
  global.createProjectStatus = PROJECT_STATUS_WAITING
}

module.exports = {
  getProjectStatus,
}
