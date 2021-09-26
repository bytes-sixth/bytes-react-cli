const sndResponse = require('../lib/sendResponse')
const { PROJECT_STATUS_WAITING } = require('../lib/define')
const {createProject:create} = require('../../common/createProject');
/**
 *  @description 获取创建项目的状态
 */
const getProjectStatus = async (ctx, _next) => {
  sndResponse(ctx.response)(global.createProjectStatus)
  global.createProjectStatus = PROJECT_STATUS_WAITING
}


const createProject = async (ctx, _next) => {

  sndResponse(ctx.response)('this is createProject method',200,'hello');
  global.createProjectStatus = PROJECT_STATUS_WAITING
}

module.exports = {
  getProjectStatus,
  createProject
}
