const path = require('path')
const fs = require('fs-extra')
const ora = require('ora')
const trash = require('trash')

const spawn = async (...args) => {
  const { spawn } = require('../src/util')
  return new Promise((resolve, reject) => {
    // win10 兼容性问题处理
    const options = args[args.length - 1]
    if (process.platform === 'win32') {
      options.shell = true
    } else {
      console.log('Linux/Unix')
    }
    const proc = spawn(...args)
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    proc.on('close', () => {
      console.log('success')
      resolve()
    })
    proc.on('error', e => {
      reject(e)
    })
  }).catch(e => {
    console.log('error:', e)
  })
}

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
