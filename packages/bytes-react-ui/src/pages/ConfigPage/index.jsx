import { useState } from 'react'
import { Select, Space } from 'antd';
import { Switch, Button } from 'antd';
import './index.css'

const { Option } = Select;

function ConfigPage()
{
    function handleChange()
    {

    }
    return (
        <div className='main-container'>
            <div>
                <div className='row-container'>
                    <span className='my-title'>选择项目的React版本</span>
                    <div className='space'></div>
                    <Select defaultValue="17" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="17">17.0(默认)</Option>
                        <Option value="16">16.0</Option>
                    </Select>
                </div>
                <div className='row-container'>
                    <span>
                        <div className='my-title'>是否启用带history功能的路由?</div>
                        <div className='my-comment'>通过使用H5的History API，路由的URL可以不包含#符号，并且能够保存当前页面变量</div>

                    </span>
                    <div className='space'></div>
                    <Switch defaultChecked>

                    </Switch>
                </div>
                <div className='row-container'>
                    <span className='my-title'>选择一个CSS预处理器</span>
                    <div className='space'></div>
                    <Select defaultValue="less" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="less">less</Option>
                        <Option value="css">css</Option>
                    </Select>
                </div>
                <div className='row-container'>
                    <span className='my-title'>选择一个代码格式化工具</span>
                    <div className='space'></div>
                    <Select defaultValue="eslint" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="eslint">eslint</Option>
                    </Select>
                </div>
                <div className='row-container2'>
                    <span className='my-title'>当格式化代码时，同时完成以下工作</span>
                    <div>
                        <Switch defaultChecked></Switch>
                        当保存文件时同时进行代码格式化
                    </div>
                    <div>
                        <Switch></Switch>
                        当使用git commit时同时进行代码格式化
                    </div>
                </div>
            </div >

            <div className='button-container'>
                <Button type='primary'>上一步</Button>
                <span style={{ width: 30 }}></span>
                <Button type='primary'>创建项目</Button>
            </div>
        </div >
    )
}

export default ConfigPage
