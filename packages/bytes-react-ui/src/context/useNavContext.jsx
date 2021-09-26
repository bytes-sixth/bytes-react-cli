import { useContext, createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  MenuOutlined,
  CheckCircleOutlined,
  ShareAltOutlined,
  SettingFilled,
} from '@ant-design/icons'

export const navConfig = [
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

export const NavContext = createContext({})
NavContext.displayName = 'NavContext'

// NavContext的数据提供者
export const NavProvider = ({ children }) => {
  const History = useHistory()
  const [selectedNavId, setSelectedNavId] = useState(0)
  // 拖拽后更新gridList的状态
  const navClick = (id, state = {}) => {
    setSelectedNavId(id)
    History.push(navConfig.find(nav => nav.id === id).path, state)
  }

  return (
    <NavContext.Provider value={{ selectedNavId, navClick }}>
      {children}
    </NavContext.Provider>
  )
}

// NavContext的数据接收者
export const NavConsumer = ({ children }) => {
  return <NavContext.Consumer>{children}</NavContext.Consumer>
}

// 封装Nav的useContext的hook
export const useNavContext = () => {
  const context = useContext(NavContext)
  return context
}
