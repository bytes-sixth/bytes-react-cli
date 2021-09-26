const Koa = require('koa')

/**
 *
 * @param {string} port
 * @param {function} callback
 */
function createServer(port, callback) {
  const app = new Koa()

  app.use(async ctx => {
    ctx.body = 'hello world'
  })

  app.listen(Number(port), callback)
}

createServer(8888,()=>{
  console.log('server on 8888')
})

// module.exports = {
//   createServer,
// }
