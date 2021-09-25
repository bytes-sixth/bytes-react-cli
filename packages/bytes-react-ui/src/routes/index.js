import AboutPage from '../pages/AboutPage'
import PresetPage from '../pages/PresetPage'
import NotFoundPage from '../pages/NotFoundPage'
import IndexPage from '../pages/IndexPage'
import PackagesPage from '../pages/PackagesPage'
import DetailPage from '../pages/DetailPage'
import ConfigPage from '../pages/ConfigPage'
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
  {
    path: '/package',
    component: PackagesPage,
  },
  {
    path: '/preset',
    component: PresetPage,
  },
  {
    path: '/detail',
    component: DetailPage,
  },
  {
    path: '/config',
    component: ConfigPage,
  },
]

export default routes
