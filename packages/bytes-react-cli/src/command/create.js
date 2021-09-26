const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const figletOrig = require('figlet')
const clear = require('clear')
const { prompt } = require('enquirer')
const trash = require('trash')

const { log } = require('../util/log')
const creteProject = require('../common/createProject')

const figlet = promisify(figletOrig)

module.exports = async (name, { installDep, useYarn }) => {
  // TODO: 对于 name 的合法验证
  name = name.trim()
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
      await trash(templatePath)
    } else {
      return
    }
  }

  await creteProject({ name, path: templatePath, installDep, useYarn })
}
