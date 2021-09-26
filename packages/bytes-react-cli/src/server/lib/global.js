const Define = require('./define')

module.exports = () => {
  const global = {};
  // 启动服务的文件夹路径
  global.workDirectory = process.cwd()
  // 创建项目时的文件夹路径
  global.currentCreateProjectDirectory = process.cwd()
  // 创建项目时的状态
  global.createProjectStatus = Define.PROJECT_STATUS_WAITING

  return global;

}
