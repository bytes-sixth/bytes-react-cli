const { spawn: spawnOrig } = require('child_process')

const spawn = async (...args) => {
  return new Promise(resolve => {
    const proc = spawnOrig(...args)
    proc.stdout?.pipe(process.stdout)
    proc.stderr?.pipe(process.stderr)
    proc.on('close', () => {
      resolve()
    })
  })
}

module.exports = { spawn }
