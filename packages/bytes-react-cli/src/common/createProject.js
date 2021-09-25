const ora = require('ora')

const {spawn} = require('../util/spawn');
const {clone} = require('../util/downloadFromRemote');
const {log} = require('../util/log');

const child_process = require('child_process');

/**
 * 创建项目
 * @param {object} options 创建项目的参数
 * @param {string} options.name 项目的名字
 * @param {string} options.path 项目存放的路径
 * @param {boolean} options.installDep 是否安装依赖
 */
module.exports = async options => {
  const { name, path, installDep } = options || {}

  if (!name) {
    throw new Error('请传入要创建的项目名称')
  }

  log(`创建项目: ${name}`)
  await clone('github:bytes-sixth/react-template', path);
  console.log(path);

  if (installDep) {
    // const spinner = ora({ text: `安装依赖...` }).start()
    const spinner = ora('安装依赖中...').start();

    // todo：使用不同的包管理器管理,将 yarn 改成由一个变量传入
      await spawn('yarn',[],{ cwd: path }); 

      // child_process.execSync('yarn',{
      //     cwd:path
      // })

    spinner.color = 'green';
    spinner.succeed('安装完成');
  }
}
