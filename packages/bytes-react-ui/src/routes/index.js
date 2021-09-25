import AboutPage from '../pages/AboutPage'
import PresetPage from '../pages/PresetPage'
import NotFoundPage from '../pages/NotFoundPage'
import IndexPage from '../pages/IndexPage'

/**
 * AboutPage: 概述页面
 * IndexPage: 主页
 * DetailPage: 项目详情页面
 * PresetPage: 预设页面
 * PackagesPage: 包管理页面
 * ConfigurationPage: 配置页面
 * NotFoundPage: 错误页面
 * ... More
 */

const routes = [
  // add your own page
  {
    path: '/',
    component: IndexPage,
  },
  {
    path: '/preset',
    component: PresetPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/404',
    component: NotFoundPage,
  },
]

export default routes
