import './index.less'
import React, { useState } from 'react'
import { Switch, Button } from 'antd'
import {
  InfoCircleOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons'
import { NavConsumer } from '../../context/useNavContext'
const funcsData = [
  {
    name: 'TypeScript',
    desc: '允许使用TS进行编码',
    isDetail: true,
    isSelected: false,
  },
  {
    name: 'TypeScript',
    desc: '允许使用TS进行编码',
    isDetail: true,
    isSelected: false,
  },
  {
    name: 'TypeScript',
    desc: '允许使用TS进行编码',
    isDetail: true,
    isSelected: false,
  },
  {
    name: 'TypeScript',
    desc: '允许使用TS进行编码',
    isDetail: true,
    isSelected: false,
  },
  {
    name: 'TypeScript',
    desc: '允许使用TS进行编码',
    isDetail: true,
    isSelected: false,
  },
  {
    name: 'TypeScript',
    desc: '允许使用TS进行编码',
    isDetail: true,
    isSelected: false,
  },
  {
    name: 'TypeScript',
    desc: '允许使用TS进行编码',
    isDetail: true,
    isSelected: false,
  },
]

const PackagesPage = () => {
  const [funcs, setFuncs] = useState(funcsData)
  const updateSelect = index => {
    return () => {
      const { isSelected } = funcs[index]
      funcs[index].isSelected = !isSelected
      setFuncs([...funcs])
    }
  }
  const prevClick = navClick => {
    navClick(1)
  }
  const nextClick = navClick => {
    navClick(3)
  }
  // console.log(1)
  return (
    <div className="packageWrapper">
      <div className="funcWrapper">
        <div className="tip">
          <InfoCircleOutlined />
          &nbsp;在项目创建之后，你仍然可以通过安装插件来增加功能
        </div>
        <h2 className="title">选择功能</h2>
        {funcs.map((func, index) => {
          return (
            <div
              className={`itemWrapper ${func.isSelected ? 'isSelected' : ''} `}
              key={index}
            >
              <div>
                <div className="name">{func.name}</div>
                <div className="desc">
                  {func.desc}
                  &nbsp; &nbsp;
                  {func.isDetail ? <a className="detail">显示详情</a> : ''}
                </div>
              </div>
              <Switch className="switch" onClick={updateSelect(index)} />
            </div>
          )
        })}
      </div>
      <div className="buttonWrapper">
        <NavConsumer>
          {({ navClick }) => {
            return (
              <>
                <Button className="button" onClick={() => prevClick(navClick)}>
                  <LeftOutlined />
                  上一步
                </Button>
                <Button
                  type="primary"
                  className="button"
                  onClick={() => nextClick(navClick)}
                >
                  下一步
                  <RightOutlined />
                </Button>
              </>
            )
          }}
        </NavConsumer>
      </div>
    </div>
  )
}

export default PackagesPage
