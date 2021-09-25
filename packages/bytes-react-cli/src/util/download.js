const { promisify } = require('util')
const downloadOrig = require('download-git-repo')
const ora = require('ora')

const download = promisify(downloadOrig)

/**
 * 下载 github 上的包
 * @param {string} repo 要下载的仓库地址,格式:`github:owner/name`
 * @param {string} desc 要存放的路径
 */
const clone = async function (repo, desc) {
  const spinner = ora(`下载......${repo}`).start()

  await download(repo, desc, {})

  spinner.color = 'green'
  spinner.text = '下载完成'
  spinner.succeed()
}

module.exports = { clone }
