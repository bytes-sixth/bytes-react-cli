import request from 'umi-request'
import config from '../../config'

const mockUrl = config.mockServer.host + ':' + config.mockServer.ports[0]
const prodUrl = config.prodServer.host + ':' + config.prodServer.ports[0]

class API {
  constructor(url = mockUrl) {
    this.url = url
    if (process.env.NODE_ENV === 'production') {
      this.mode = 'production'
      this.url = prodUrl
    } else {
      this.mode = 'development'
      console.log('is using mock')
    }
  }

  async fetch(params = '/api/hello') {
    const fullurl = this.url + params
    console.log(fullurl)
    const res = await request.get(fullurl)
    console.log(res)
    return res
  }
}

export default API
