/**
 * @author xiaoda
 * @description 获取某目录下的文件
 */
const fs = require('fs')
const path = require('path')

const isDirectory = direntFile => direntFile.isDirectory()

/**
 * @description 根据文件夹路径，获取文件夹下的所有[文件|文件夹|文件和文件夹]
 * @param {string} folderPath - 文件夹路径
 */
const getDirectoryPath = async folderPath => {
  try {
    const direntFiles = fs.readdirSync(folderPath, { withFileTypes: true })
    return direntFiles.filter(isDirectory).map(direntFile => ({
      directoryName: direntFile.name,
      path: path.resolve(folderPath, direntFile.name),
    }))
  } catch (error) {
    console.log('error', error)
  }
}

module.exports = { getDirectoryPath }
