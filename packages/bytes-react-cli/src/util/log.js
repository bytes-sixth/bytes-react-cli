const chalk = require('chalk')

/**
 *
 * @param {string} content 要在命令行打印的内容
 * @returns
 * @needToImprove 使命令行可以打印 emoj ,并且可以指定输出的文字颜色
 */

const log = content => console.log(chalk.green(content))

module.exports = { log }
