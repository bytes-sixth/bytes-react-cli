import { useState } from 'react'
import { Tabs, Button } from 'antd';
import { MenuUnfoldOutlined, CheckCircleOutlined, ApartmentOutlined, SettingOutlined, } from '@ant-design/icons';
import Details from "../DetailPage/index.jsx";
// import Function from "../Function/index.jsx";
// import Preinstall from "../Preinstall/index.jsx";
// import Setting from "../Setting/index.jsx";
import indexCss from "./index.module.css";
const { TabPane } = Tabs;

const IndexPage = () => {

    const [preinstall, setPreI] = useState(false)

    const [tabId, setTabId] = useState("1");
    
    const [detail, _setDetail] = useState({});

    function handlePreInstall(e){
        setPreI(e);
    }

    function toNext(id){
        setTabId(id);
    }

    function setDetail(obj){
        console.log(obj)
        _setDetail(obj);
    }

  return (
    <div>
      <div className={indexCss.content}>
        <header>
            <h1>创建新项目</h1>
        </header>
        <Tabs defaultActiveKey="1" activeKey={tabId} centered onChange={(e)=>setTabId(e)}>
            <TabPane key="1" tab={
                <Button type="text" icon={<MenuUnfoldOutlined />}>
                    详情
                </Button>
            } key="1">
                <Details setDetail={setDetail} next={toNext} onNextOne={handlePreInstall}/>
            </TabPane>

            <TabPane key="2" tab={
                <Button disabled={!preinstall} type="text" icon={<CheckCircleOutlined />}>
                    预设
                </Button>
            } key="2">
                {/* <Function/> */}
            </TabPane>

            <TabPane key="3" tab={
                <Button disabled type="text" icon={<ApartmentOutlined />}>
                    功能
                </Button>
            } key="3">
                {/* <Preinstall></Preinstall> */}
            </TabPane>

            <TabPane key="4" tab={
                <Button disabled type="text" icon={<SettingOutlined />}>
                    配置
                </Button>
            } key="4">
                {/* <Setting></Setting> */}
            </TabPane>
        </Tabs>
      </div>
      <div className="bg"></div>
      <div className="bg2"></div>
    </div>
  )
}

export default IndexPage
