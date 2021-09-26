import { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import { NavConsumer } from '../../../../context/useNavContext'
import './index.less'
const ActionBar = ({ selectedKey }) => {
  const History = useHistory()
  const Location = useLocation()
  const [nextText, setNextText] = useState('创建项目')
  useEffect(() => {
    if (selectedKey === 'manual') {
      setNextText('下一步')
    } else {
      setNextText('创建项目')
    }
  }, [selectedKey])

  // 上一步操作
  const prevActionClick = navClick => {
    navClick(0)
  }

  // 按钮操作（下一步或直接创建项目）
  const nextActionClick = navClick => {
    if (nextText == '下一步') {
      navClick(2)
    } else {
      console.log(Location)
    }
  }
  return (
    <NavConsumer>
      {({ navClick }) => {
        return (
          <div className="action-bar">
            <button
              className="action previous-action"
              onClick={() => prevActionClick(navClick)}
            >
              <ArrowLeftOutlined />
              上一步
            </button>
            <button
              className="action next-action"
              onClick={() => nextActionClick(navClick)}
            >
              {nextText === '创建项目' ? (
                <>
                  <CheckCircleOutlined />
                  {nextText}
                </>
              ) : (
                <>
                  {nextText}
                  <ArrowRightOutlined />
                </>
              )}
            </button>
          </div>
        )
      }}
    </NavConsumer>
  )
}
export default ActionBar
