const { program } = require('commander')
const create = require('./command/create')
const ui = require('./command/ui')

program.version('0.0.1')

program
  .command('create')
  .argument('<app-name>', '要创建的项目名称')
  .option('-i --install-dep', '是否需要安装依赖')
  .option('--use-yarn', '使用 yarn 作为包管理器,默认使用 npm')
  .description('创建一个新的 React 项目')
  .action(create)

program
  .command('ui')
  .option('--no-open', '是否需要安装依赖', true)
  .description('使用 UI 创建 React 项目')
  .action(ui)

program.parseAsync(process.argv)
