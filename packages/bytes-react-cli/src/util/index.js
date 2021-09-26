const { clone } = require('./downloadFromRemote')
const { log } = require('./log')
const { spawn } = require('./spawn')

module.exports = {
  log,
  clone,
  spawn,
}
