import { useState, useEffect } from 'react'
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import './index.less'
const ActionBar = ({ selectedKey }) => {
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
  return (
    <div className="action-bar">
      <button className="action previous-action">
        <ArrowLeftOutlined />
        上一步
      </button>
      <button className={`action next-action ${!isActive ? 'none' : ''}`}>
        {nextText === '创建项目' ? (
          <span className="create-animation">
            <CheckCircleOutlined />
            {nextText}
          </span>
        ) : (
          <span className="next-animation">
            {nextText}
            <ArrowRightOutlined />
          </span>
        )}
      </button>
    </div>
  )
}
export default ActionBar
