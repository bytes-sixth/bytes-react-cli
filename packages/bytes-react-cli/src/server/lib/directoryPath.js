/**
 * @author xiaoda
 * @description 获取某目录下的文件
 */
const fs = require('fs')
const path = require('path')

/**
 * 判断当前文件是否是一个文件夹
 * @param {dirObject} direntFile
 * @returns {boolean}
 */
const isDirectory = direntFile => direntFile.isDirectory()

/**
 * 判断当前文件是否是一个文件
 * @param {dirObject} direntFile
 * @returns {boolean}
 */
const isFile = direntFile => direntFile.isFile()

/**
 * @description 根据文件夹路径，获取文件夹下的所有[文件|文件夹|文件和文件夹]
 * @param {string} folderPath - 文件夹路径
 * @param {object} args - 指明查询返回文件还是文件夹，默认值为 {file:true,dir:true}
 * @returns {promise}
 */
const getContentFromDirectory = async (folderPath, args) => {
  if (!args) {
    args = {}
  }

  let file = String(args.file) === 'false' ? false : true
  let dir = String(args.dir) === 'false' ? false : true

  try {
    folderPath = path.join(path.dirname(folderPath))
    let contentArr = null
    const direntFiles = await fs.readdirSync(folderPath, {
      withFileTypes: true,
    })

    if (file === false && dir === false) {
      return []
    } else if (file === false) {
      contentArr = direntFiles.filter(isDirectory).map(direntFile => ({
        directoryName: direntFile.name,
        path: path.resolve(folderPath, direntFile.name),
      }))
    } else if (dir === false) {
      contentArr = direntFiles.filter(isFile).map(direntFile => ({
        directoryName: direntFile.name,
        path: path.resolve(folderPath, direntFile.name),
      }))
    } else {
      contentArr = direntFiles.map(direntFile => ({
        directoryName: direntFile.name,
        path: path.resolve(folderPath, direntFile.name),
      }))
    }

    return [...contentArr]
  } catch (error) {
    console.log('error', error)
  }
}

module.exports = { getContentFromDirectory }
