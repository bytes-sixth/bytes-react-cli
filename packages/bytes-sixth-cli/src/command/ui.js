const { createServer } = require('../server')
const { log } = require('../util')

module.exports = async () => {
  const server = createServer()
  server.listen(8888, () => {
    log('Server run on http://localhost:8888')
  })
}
