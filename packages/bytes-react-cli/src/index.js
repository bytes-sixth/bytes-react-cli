const { program } = require('commander')
const create = require('./command/create')
const ui = require('./command/ui')

;(async function () {
  program.version('0.0.1')

  program
    .command('create')
    .argument('<app-name>', '要创建的项目名称')
    .option('-i --install-dep', '是否需要安装依赖')
    .description('创建一个新的 React 项目')
    .action(create)

  program.command('ui').description('使用 UI 创建 React 项目').action(ui)

  await program.parseAsync(process.argv)
})()
