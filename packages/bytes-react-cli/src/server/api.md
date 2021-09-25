# Api 接口文档

> url: 127.0.0.1:8888

## `[get]` `/api/project/getProjectStatus` - 获取创建项目的状态

- 参数

```js
无
```

- 响应

```js
{
  code: number, // 状态 - [200: 正常，400：参数有误, 500: 服务端出错]
  data: string, // 数据 - 返回的数据 [waiting: 等待(空闲可以创建项目),starting: 正在创建项目, success: 创建成功，error: 创建失败]
  msg: string
}
```
