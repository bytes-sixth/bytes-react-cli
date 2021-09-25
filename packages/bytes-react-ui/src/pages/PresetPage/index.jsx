import { useState } from 'react'
import PresetItem from './child/PresetItem'
import ActionBar from './child/ActionBar'
import './index.less'

const projectList = [
  {
    title: 'Default preset (React)',
    key: 'default',
    description: 'React初始化项目',
  },
  { title: '手动', key: 'manual', description: '手动配置项目' },
]
const PresetPage = () => {
  // 选择预设的key
  const [selectedKey, setSelectedKey] = useState('none')

  // 切换预设
  const select = key => {
    setSelectedKey(key)
  }
  return (
    <div className="preset-container">
      <div className="info-banner">
        预设就是一套定义好的插件和配置。
        你也可以将自己的配置保存成预设，方便以后创建项目使用。
      </div>
      <div className="cta-text">选择一套预设</div>
      <div className="project-preset-list">
        {projectList.map(project => (
          <PresetItem
            key={project.key}
            select={select}
            projectInfo={project}
            selectedKey={selectedKey}
          />
        ))}
      </div>
      <ActionBar selectedKey={selectedKey} />
    </div>
  )
}
export default PresetPage
