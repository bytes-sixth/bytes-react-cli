import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import { NavConsumer } from '../../../../context/useNavContext'
import { Button } from 'antd'
import './index.less'
const ActionBar = ({ selectedKey }) => {
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
      const { state } = Location

      fetch('/api/project/createProject', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(state),
      })
        .then(res => res.json())
        .then(d => {
          console.log(d)
        })
    }
  }
  return (
    <NavConsumer>
      {({ navClick }) => {
        return (
          <div className="action-bar">
            <Button
              className="action previous-action"
              onClick={() => prevActionClick(navClick)}
            >
              <ArrowLeftOutlined />
              <span>上一步</span>
            </Button>
            <Button
              type="primary"
              className="action next-action"
              onClick={() => nextActionClick(navClick)}
            >
              {nextText}
              {nextText === '创建项目' ? (
                <CheckCircleOutlined />
              ) : (
                <ArrowRightOutlined />
              )}
            </Button>
          </div>
        )
      }}
    </NavConsumer>
  )
}
export default ActionBar
