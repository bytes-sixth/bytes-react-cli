/**
 * 选择包管理器，设置依赖源
 * @module
 * @param {string}
 * @param {string}
 */

/**
 * 设置依赖源
 * @param {string} toolName - 包管理工具的名字
 * @param {object} config - 配置对象
 * @param {string} command - 命令行执行的设置依赖源的命令
 * @
 */
function setPackageSource(config) {
  const { toolName } = config

  const command = `${toolName} set config set registry https://registry.npm.taobao.org`

  return command
}

/**
 * 初始化项目
 * @param {string} toolName - 包管理工具的名字
 * @param {object} config - 配置对象
 * @
 */
function createProject(config) {}

/**
 * 安装依赖
 */
function installPackage() {}
