import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import './index.less'
const ActionBar = ({ selectedKey }) => {
  const History = useHistory()
  const [nextText, setNextText] = useState('创建项目')
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    if (selectedKey !== 'none') {
      setIsActive(true)
    }
    if (selectedKey === 'manual') {
      setNextText('下一步')
    } else {
      setNextText('创建项目')
    }
  }, [selectedKey])

  // 上一步操作
  const prevActionClick = () => {
    History.push('/detail')
  }

  // 按钮操作（下一步或直接创建项目）
  const nextActionClick = () => {
    if (selectedKey === 'none') return
    if (nextText == '下一步') {
      History.push('/package')
    } else {
      console.log(History)
    }
  }
  return (
    <div className="action-bar">
      <button className="action previous-action" onClick={prevActionClick}>
        <ArrowLeftOutlined />
        上一步
      </button>
      <button
        className={`action next-action ${!isActive ? 'none' : ''}`}
        onClick={nextActionClick}
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
}
export default ActionBar
