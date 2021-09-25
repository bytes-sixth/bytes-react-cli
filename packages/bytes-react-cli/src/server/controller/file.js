const { getDirectoryPath } = require('../lib/directoryPath')
const sendResponse = require('../lib/sendResponse.js')

/**
 *@description 获取某文件夹路径下的所有文件夹
 */
const getDirectionListOfPath = async (ctx, next) => {
  try {
    const { directoryPath } = ctx.request.query
    if (directoryPath) {
      const fileList = await getDirectoryPath(directoryPath)
      global.currentCreateProjectDirectory = directoryPath
      sendResponse(ctx.response)(fileList)
    } else {
      const fileList = await getDirectoryPath(
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
const getStartCliPath = async (ctx, next) => {
  sendResponse(ctx.response)(global.workDirectory, 500, '服务器出错')
}

module.exports = {
  getDirectionListOfPath,
  getStartCliPath,
}
