const ora = require('ora')
const { TEMPLATE_URL } = require('./dectionaries')
const { clone, log, spawn } = require('../util')

/**
 * 创建项目
 * @param {object} options 创建项目的参数
 * @param {string} options.name 项目的名字
 * @param {string} options.path 项目存放的路径
 * @param {boolean} options.installDep 是否安装依赖
 */
module.exports = async options => {
  const { name, path, installDep, templateType } = options || {}

  if (!name) {
    throw new Error('请传入要创建的项目名称')
  }

  log(`创建项目: ${name}`)
  await clone(`github:${TEMPLATE_URL[templateType]}`, path)

  if (installDep) {
    const spinner = ora({ text: `安装依赖...` }).start()
    await spawn('yarn', [], { cwd: `./${name}` })
    spinner.color = 'green'
    spinner.text = '安装完成'
    spinner.succeed()
  }
}
