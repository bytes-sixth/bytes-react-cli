const sndResponse = require('../lib/sendResponse')
const { PROJECT_STATUS_WAITING } = require('../lib/define')
const createProjectOri = require('../../common/createProject');
/**
 *  @description 获取创建项目的状态
 */
const getProjectStatus = async (ctx, _next) => {
  sndResponse(ctx.response)(global.createProjectStatus)
  global.createProjectStatus = PROJECT_STATUS_WAITING
}


const createProject = async (ctx, _next) => {

  const body = ctx.request.body;
  console.log(body);
  console.log('createProject 请求在',process.cwd(),"创建项目");
  const options = {
    name:"bsclinameddd",
    path:process.cwd() + "bsclinameddd",
    installDep:false,
    templateType:'default',
    useYarn:false,
  }

  createProjectOri(options);
  sndResponse(ctx.response)('this is createProject method',200,'hello3333');

}

module.exports = {
  getProjectStatus,
  createProject
}
