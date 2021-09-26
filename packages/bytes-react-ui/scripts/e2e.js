const { spawn } = require('child_process')
const { kill } = require('cross-port-killer')

const env = Object.create(process.env)

env.BROWSER = 'none'
env.TEST = true
env.PROGRESS = 'none'

const startServer = spawn(
  /^win/.test(process.platform) ? 'npm.cmd' : 'npm',
  ['run', 'serve'],
  { env }
)

startServer.stderr.on('data', data => {
  console.log(data.toString())
})

startServer.stdout.on('exit', () => {
  kill(process.env.PORT || 3000)
})

console.log('Starting development server for e2e tests...')

startServer.stdout.on('data', data => {
  console.log(data.toString())
  const testCmd = spawn(
    /^win/.test(process.platform) ? 'npm.cmd' : 'npm',
    ['test', '--', '--maxWorkers=1', '--runInBand'],
    {
      stdio: 'inherit',
    }
  )
  testCmd.on('exit', code => {
    console.log(code)
    startServer.kill()
    process.exit(code)
  })
})
