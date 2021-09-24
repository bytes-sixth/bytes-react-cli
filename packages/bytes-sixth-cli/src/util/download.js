const { promisify } = require('util')
const downloadOrig = require('download-git-repo')
const ora = require('ora')

const download = promisify(downloadOrig)
const clone = async function (repo, desc) {
  const spinner = ora(`下载......${repo}`).start()

  await download(repo, desc, {})

  spinner.color = 'green'
  spinner.text = '下载完成'
  spinner.succeed()
}

module.exports = { clone }
