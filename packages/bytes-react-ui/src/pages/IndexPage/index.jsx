import React from 'react'
import { useState } from 'react'
import { Button } from 'antd'

const IndexPage = () => {
  // const [preinstall, setPreI] = useState(false)

  // const [tabId, setTabId] = useState("1");

  // const [detail, _setDetail] = useState({});

  // function handlePreInstall(e){
  //     setPreI(e);
  // }

  // function toNext(id){
  //     setTabId(id);
  // }

  // function setDetail(obj){
  //     console.log(obj)
  //     _setDetail(obj);
  // }

  function installDep() {}
  function handleChange() {}
  function handleSubmit() {}

  return (
    <div
      style={{
        margin: '200px auto 0',
        width: 200,
        boxShadow: 'hsl(200deg 18% 46% / 20%) 0px 0px 10px 2px',
        padding: 10,
        borderRadius: 5,
      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <label
          style={{
            marginBottom: 20,
          }}
        >
          是否安装依赖:
          <input
            name="installDep"
            type="checkbox"
            // checked={installDep}
            onChange={handleChange}
          />
        </label>
        <Button type="primary" onClick={handleSubmit}>
          确认
        </Button>
      </form>
    </div>
  )
}

export default IndexPage
