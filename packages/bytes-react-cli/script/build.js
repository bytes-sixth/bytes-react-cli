const path = require('path')
const fs = require('fs-extra')
const ora = require('ora')
const trash = require('trash')
const { spawn } = require('../src/util')

async function build() {
  let spinner = ora({ text: `安装依赖...` }).start()
  const uiPath = path.join(__dirname, '../../bytes-react-ui')
  const distPath = path.join(uiPath, '/dist')
  await trash(distPath)
  await spawn('yarn', [], { cwd: uiPath })
  spinner.color = 'green'
  spinner.text = '安装完成'
  spinner.succeed()

  spinner = ora({ text: `开始编译...` }).start()
  await spawn('yarn', ['build'], { cwd: uiPath })
  spinner.color = 'green'
  spinner.text = '编译完成'
  spinner.succeed()

  await trash(path.join(__dirname, '../dist'))
  fs.copySync(distPath, path.join(__dirname, '../dist'))
}

build()
