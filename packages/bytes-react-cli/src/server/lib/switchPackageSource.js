const exec = require('child_process').exec;

/**
 * 选择包管理器，设置依赖源
 * @module 
 * @param {string} 
 * @param {string} 
 */



const sourceUrl = 'https://registry.npm.taobao.org';
/**
 * 设置依赖源
 * @param {string} sourceUrl - 源地址 
 * @param {object} config - 配置对象 
 * @param {string} toolName - 包管理工具的名字
 * @param {string} command - 命令行执行的设置依赖源的命令
 * @
 */
function setPackageSource(config,sourceUrl) {

    const {toolName} = config;
    
    const command = `${toolName} config set registry ${sourceUrl}`;
    // const command = `${toolName} init -y`;

    console.log(command);

    const workerProcess = exec(command,{cwd:process.cwd()}, function (err, stdout, stderr) {
      if (err) {

        console.log(err)
        
      }
      
    })

    workerProcess.on('exit', function (code) {
        console.log('设置依赖源子进程结束~  进程id：'+code);
    });
   
    
}



/**
 * 初始化项目
 * @param {string} toolName - 包管理工具的名字
 * @param {object} config - 配置对象 
 * @
 */
function createProject(config) {

}

/**
 * 安装依赖
 */
function installPackage() {
    
}


module.exports = {
    setPackageSource
}