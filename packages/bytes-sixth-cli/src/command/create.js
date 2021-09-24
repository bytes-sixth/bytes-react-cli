const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const figletOrig = require('figlet')
const clear = require('clear')
const ora = require('ora')
const { prompt } = require('enquirer')
const rimrafOrig = require('rimraf')

const { clone, log, spawn } = require('../util')

const figlet = promisify(figletOrig)
const rimraf = promisify(rimrafOrig)

module.exports = async name => {
  name = name || 'template'
  clear()
  const data = await figlet('CREATE')
  log(data ?? '')

  const templatePath = path.join(process.cwd(), name)
  if (fs.existsSync(templatePath)) {
    const { remove } = await prompt({
      type: 'confirm',
      name: 'remove',
      message: '文件夹已存在,是否删除?',
    })
    if (remove) {
      await rimraf(templatePath)
    } else {
      return
    }
  }

  log(`创建项目: ${name}`)
  await clone('github:bytes-sixth/react-template', name)

  const spinner = ora({ text: `安装依赖...` }).start()
  await spawn('yarn', [], { cwd: `./${name}` })
  spinner.color = 'green'
  spinner.text = '安装完成'
  spinner.succeed()
}
