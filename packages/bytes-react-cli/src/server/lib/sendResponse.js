/**
 * @description 统一响应
 * @param {*} res - ctx.response
 * @param {*} status - 状态 默认200
 * @return {Function(data, code=200, msg='')} - function
 */
const sendResponse =
  (res, status = 200) =>
  (data = null, code = 200, msg = '') => {
    res.status = status
    res.type = 'text/json'

    res.body = {
      code,
      data,
      msg,
    }
  }

module.exports = sendResponse
