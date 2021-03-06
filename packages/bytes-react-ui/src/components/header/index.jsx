import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import './index.less'
import {
  // MenuOutlined,
  // CheckCircleOutlined,
  // ShareAltOutlined,
  // SettingFilled,
  MenuUnfoldOutlined,
  PlusSquareOutlined,
  ToTopOutlined,
} from '@ant-design/icons'
import { navConfig, NavConsumer } from '../../context/useNavContext'

// const navConfig = [
//   {
//     id: 0,
//     title: '详情',
//     icon: <MenuOutlined />,
//     path: '/detail',
//   },
//   {
//     id: 1,
//     title: '预设',
//     icon: <CheckCircleOutlined />,
//     path: '/preset',
//   },
//   {
//     id: 2,
//     title: '功能',
//     icon: <ShareAltOutlined />,
//     path: '/package',
//   },
//   {
//     id: 3,
//     title: '配置',
//     icon: <SettingFilled />,
//     path: '/config',
//   },
// ]

//用于根路由的头部配置
/*
const navForIndexPage = [
  {
    id: 0,
    title: '项目',
    icon: <MenuUnfoldOutlined />,
    path: '/',
  },
  {
    id: 1,
    title: '创建',
    icon: <PlusSquareOutlined />,
    path: '/',
  },
  {
    id: 2,
    title: '导入',
    icon: <ToTopOutlined />,
    path: '/',
  },
]
*/

const Header = () => {
  const history = useHistory()
  //const params = useParams()
  const location = useLocation()
  const { pathname } = location
  const [isSelected, setIsSelected] = useState(0)
  // const changePage = (path, id) => {
  //   return () => {
  //     history.push(path)
  //     setIsSelected(id)
  //   }
  // }

  const nav = navConfig

  return (
    <div className="headerWrapper">
      <div className="title">创建新项目</div>
      <NavConsumer>
        {({ selectedNavId }) => {
          return (
            <div className="nav">
              {nav.map(navItem => {
                return (
                  <div
                    className={`nav-item ${
                      selectedNavId === navItem.id ? 'isSelected' : ''
                    }`}
                    key={navItem.id}
                    // onClick={changePage(navItem.path, navItem.id)}
                  >
                    {navItem.icon}
                    &nbsp;
                    {navItem.title}
                  </div>
                )
              })}
            </div>
          )
        }}
      </NavConsumer>
    </div>
  )
}
export default Header
