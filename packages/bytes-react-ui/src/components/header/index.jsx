import { useHistory, withRouter } from 'react-router-dom'
import React, { useState } from 'react'
import './index.less'
import {
  MenuOutlined,
  CheckCircleOutlined,
  ShareAltOutlined,
  SettingFilled,
} from '@ant-design/icons'

const navConfig = [
  {
    id: 0,
    title: '详情',
    icon: <MenuOutlined />,
    path: '/detail',
  },
  {
    id: 1,
    title: '预设',
    icon: <CheckCircleOutlined />,
    path: '/preset',
  },
  {
    id: 2,
    title: '功能',
    icon: <ShareAltOutlined />,
    path: '/package',
  },
  {
    id: 3,
    title: '配置',
    icon: <SettingFilled />,
    path: '/config',
  },
]

const Header = () => {
  const history = useHistory()
  const [isSelected, setIsSelected] = useState(0)
  const changePage = (path, id) => {
    return () => {
      history.push(path)
      setIsSelected(id)
    }
  }

  return (
    <div className="headerWrapper">
      <div className="title">创建新项目</div>
      <div className="nav">
        {/* <div className="nav-item"><MenuOutlined />&nbsp;详情</div>
        <div className="nav-item"><CheckCircleOutlined /> &nbsp;预设</div>
        <div className="nav-item"><ShareAltOutlined /> &nbsp;功能</div>
        <div className="nav-item"><SettingFilled/>&nbsp;配置</div> */}
        {navConfig.map(navItem => {
          return (
            <div
              className={`nav-item ${
                isSelected === navItem.id ? 'isSelected' : ''
              }`}
              key={navItem.id}
              onClick={changePage(navItem.path, navItem.id)}
            >
              {navItem.icon}
              &nbsp;
              {navItem.title}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default withRouter(Header)
