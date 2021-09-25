/**
 *  @description 获取创建项目的状态
 */
const getProjectStatus = (ctx, next) => {
  console.log('createProjectStatus', global.createProjectStatus)
}

module.exports = {
  getProjectStatus,
}
