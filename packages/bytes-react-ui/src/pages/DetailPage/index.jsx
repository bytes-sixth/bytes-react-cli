import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Row, Col, Select, Switch, Modal } from 'antd'
import { FolderOpenOutlined, EditOutlined } from '@ant-design/icons'
import { NavConsumer } from '../../context/useNavContext'
import './index.less'
const { Option } = Select

const DetailPage = props => {
  const History = useHistory()
  // 项目文件夹位置
  const project_path = 'E:/work'
  // 项目名称
  const [projectName, setProjectName] = useState()
  // 包管理器
  const [pack, setPackage] = useState('default')
  // 是否覆盖
  const [cover, setCover] = useState(true)
  // 无新手
  const [untyro, setUntyro] = useState(false)
  // 初始化 git
  const [initGit, setInitGit] = useState(true)

  // // 对话框展示
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // // 选择项目位置
  // const chooseDir = ()=>{
  //     setIsModalVisible(true)
  // }
  // const handleOk = () => {
  //     setIsModalVisible(false);
  // };
  // const handleCancel = () => {
  //     setIsModalVisible(false);
  // };

  // 项目名称输入回调
  const handleName = value => {
    setProjectName(value)
  }

  // 下一步点击回调
  const handleClick = navClick => {
    const chooses = {
      path: `${project_path}/${projectName}`,
      package: pack,
      option: {
        cover,
        untyro,
      },
      initGit,
    }
    // props.setDetail(chooses);
    // props.next("2");
    console.log(chooses)
    navClick(1, chooses)
  }

  return (
    <div className=".detail">
      {/* <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                123
            </Modal> */}
      <div className="rd-form">
        <Form size="large" layout="vertical">
          <Form.Item label="项目名称" required>
            <Input
              value={projectName}
              style={{ marginBottom: '12px' }}
              onChange={e => handleName(e.target.value)}
              onPressEnter={() => console.log(projectName)}
              prefix={<FolderOpenOutlined />}
              placeholder="输入项目名称"
            />
            <Row>
              <Col span={20}>
                <h4>{project_path + '/' + (projectName || '')}</h4>
              </Col>
              <Col span={4} style={{ textAlign: 'right' }}>
                {/* <Button
                                    size="small"
                                    type="primary"
                                    icon={<EditOutlined />}
                                    onClick={chooseDir}
                                /> */}
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="包管理器">
            <Select
              value={pack}
              onChange={e => setPackage(e)}
              style={{ width: '100%' }}
            >
              <Option value="default">默认</Option>
              <Option value="npm">npm</Option>
              <Option value="yarm">yarm</Option>
              <Option value="pnpm">pnmp</Option>
            </Select>
          </Form.Item>
          <Form.Item label="更多选项">
            <Row style={{ marginBottom: '6px' }}>
              <Col span={20}>
                <h4>若目标文件夹已存在则将其覆盖</h4>
              </Col>
              <Col span={4} style={{ textAlign: 'right' }}>
                <Switch checked={cover} onChange={e => setCover(e)} />
              </Col>
            </Row>
            <Row style={{ marginBottom: '6px' }}>
              <Col span={20}>
                <h4>无新手指引的脚手架项目</h4>
              </Col>
              <Col span={4} style={{ textAlign: 'right' }}>
                <Switch checked={untyro} onChange={e => setUntyro(e)} />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="Git">
            <Row>
              <Col span={20}>
                <h4>初始化 Git 仓库（建议）</h4>
              </Col>
              <Col span={4} style={{ textAlign: 'right' }}>
                <Switch checked={initGit} onChange={e => setInitGit(e)} />
              </Col>
            </Row>
          </Form.Item>
        </Form>
        <div className="detail-submit bottom-submit">
          <NavConsumer>
            {({ navClick }) => {
              return (
                <Button
                  disabled={!projectName}
                  size="large"
                  onClick={() => handleClick(navClick)}
                  type="primary"
                  block
                >
                  下一步
                </Button>
              )
            }}
          </NavConsumer>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
