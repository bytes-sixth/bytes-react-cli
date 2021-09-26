
const open = require('open')

const openBrowser = url => {
  open(url, {
    app: {
      name: open.apps.chrome,
    },
  })
}

module.exports = { openBrowser }