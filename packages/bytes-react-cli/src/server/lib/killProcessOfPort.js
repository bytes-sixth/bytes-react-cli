const { kill } = require('process')
const exec = require('child_process').exec

const cmd = process.platform == 'win32' ? 'netstat -ano' : 'ps aux' // 判断平台

const getPid = port => {
  return new Promise((resolve, reject) => {
    exec(cmd, function (err, stdout, stderr) {
      if (err) {
        reject(err)
        return console.log(err)
      }
      stdout.split('\n').forEach(line => {
        let std = line.trim().split(/\s+/)
        let address = std[1]
        if (address) {
          if (address.split(':')[1] == port) {
            resolve(std.pop())
          }
        }
      })
    })
  })
}

/**
 * @description 结束某个端口的进程
 * @param {number|string} port  - 端口
 * @returns
 */
const killProcess = async port => {
  try {
    const pid = await getPid(port)
    kill(pid, 'SIGTERM')
    return true
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  killProcess,
}
