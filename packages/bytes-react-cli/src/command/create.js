const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const figletOrig = require('figlet')
const clear = require('clear')
const { prompt } = require('enquirer')
const rimrafOrig = require('rimraf')

const { log } = require('../util')
const creteProject = require('../common/createProject')

const figlet = promisify(figletOrig)
const rimraf = promisify(rimrafOrig)

module.exports = async name => {
  // TODO: 对于 name 的合法验证
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
  creteProject({ name, path: templatePath, installDep: false })
}
