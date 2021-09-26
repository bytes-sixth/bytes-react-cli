// const { createServer } = require('../server/index')
const { createServer } = require('../servertest/index')
const { log } = require('../util/log')
const { openBrowser } = require('../server/lib/openBrowser')
const clear = require('clear')

const { appConfig } = require('../common/config')
const { port } = appConfig

module.exports = async () => {
  clear()
  log('Strting GUI >>>>')

  try {
    createServer(port, () => {
      openBrowser('http://localhost:' + port)
      log('Server run on http://localhost:' + port)
    })
  } catch (err) {
    // todo：如果端口被占用了，要换端口启动
  }
}
