import { lazy } from 'react'
const AboutPage = lazy(() => import('../pages/AboutPage'))
const IndexPage = lazy(() => import('../pages/IndexPage'))
const DetailPage = lazy(() => import('../pages/DetailPage'))
const PresetPage = lazy(() => import('../pages/PresetPage'))
const PackagesPage = lazy(() => import('../pages/PackagesPage'))
const ConfigPage = lazy(() => import('../pages/ConfigPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))
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
    component: DetailPage,
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
