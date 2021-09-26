const { spawn: spawnOrig } = require('child_process')

/**
 * 将 child_process 的 spawn() 函数封装成了 promise 对象
 * @param  {...any} args
 * @returns
 */
const spawn = async (...args) => {
  return new Promise(resolve => {
    try {
      const [command, commandargs, options] = args

      if (process.platform === 'win32') {
        options.shell = true
      }

      const proc = spawnOrig(command, commandargs, options)

      proc.stdout?.pipe(process.stdout) // 这里将子进程的输出输出到主进程
      proc.stderr?.pipe(process.stderr)
      proc.on('close', () => {
        resolve()
      })
    } catch (err) {
      console.log(err)
    }
  })
}

module.exports = { spawn }
