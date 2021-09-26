// todo： 后面要将 appConfig 单独存在一个 json 文件中，作为一个数据库存储web应用信息
let appConfig = {
  serverUrl: 'http://localhost:', // 启动服务时的 url
  port: '3000', // 启动服务时的端口号
  projects: [], // 每新建一个项目往里加一个 projectConfig
}

let projectConfig = {
  projectPath: '', // "项目路径"
  projectName: '',
  toolName: '', // "使用的包管理工具"
  hasProject: true, // "hasProject 表示目标文件夹是否已经存在"
  GitRepo: {
    isGitRepo: true,
    gitRepoUrl: '',
    commitMessage: '',
  },
  presupposition: 1, // "presupposition 的选项有 react 官方模板(1)|git拉取(2)|手动配置项目(3)"
  selfConfig: {
    // "只有选择手动配置项目时 dependencies，devDependencies 两个字段才发挥作用"
    dependencies: [],
    devDependencies: [],
    versionOfReact: '',
    others: {},
  },
}

module.exports = {
  appConfig,
  projectConfig,
}
