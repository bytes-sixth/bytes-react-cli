const { getContentFromDirectory } = require('../lib/directoryPath')
const sendResponse = require('../lib/sendResponse.js')
const global = require('../lib/global.js');
/**
 *@description 获取某文件夹路径下的所有文件夹
 */
const getDirectionListOfPath = async (ctx, _next) => {
  try {
    const { directoryPath } = ctx.request.query
    if (directoryPath) {
      const fileList = await getContentFromDirectory(directoryPath)
      global.currentCreateProjectDirectory = directoryPath
      sendResponse(ctx.response)(fileList)
    } else {
      const fileList = await getContentFromDirectory(
        global.currentCreateProjectDirectory
      )
      sendResponse(ctx.response)(fileList)
    }
  } catch (error) {
    sendResponse(ctx.response)(null, 500, '服务器出错')
  }
}

/**
 *@description 获取启动项目的路径
 */
const getStartCliPath = async (ctx, _next) => {
  sendResponse(ctx.response)(global().workDirectory, 200, 'this is 启动路径')
}

module.exports = {
  getDirectionListOfPath,
  getStartCliPath,
}
