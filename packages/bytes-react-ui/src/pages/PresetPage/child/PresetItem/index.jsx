import { useMemo } from 'react'
import './index.less'
const PresetItem = ({ select, projectInfo, selectedKey }) => {
  const { title, key, description } = projectInfo

  // 缓存是否选择此item选项
  const computedIsSelected = useMemo(() => selectedKey == key, [selectedKey])

  // 点击选项
  const selectProject = () => {
    select(key)
  }
  return (
    <div
      onClick={selectProject}
      className={`project-preset-item ${computedIsSelected ? 'selected' : ''}`}
    >
      <div className="radio-icon">
        {computedIsSelected ? (
          <div className="react-ui-icon selected-icon">
            <div className="react-ui-circle" />
          </div>
        ) : (
          <div className="react-ui-icon" />
        )}
      </div>
      <div className="list-item-info">
        <div
          className={`list-title ${
            computedIsSelected ? 'selected-list-title' : ''
          }`}
        >
          {title}
        </div>
        <div className="list-info">{description}</div>
      </div>
    </div>
  )
}
export default PresetItem
