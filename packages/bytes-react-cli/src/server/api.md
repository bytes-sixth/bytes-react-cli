# Api 接口文档

> url: 127.0.0.1:8888

## 项目模块

### `[get]` 获取创建项目的状态 - `/api/project/getProjectStatus`

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

## 文件模块

### `[get]` 获取某文件夹路径下的所有文件夹 - `/api/file/getDirectionListOfPath`

- 参数

```js
 ?directoryPath=[string]
```

- 响应

```js
{
  code: number, // 状态 - [200: 正常，400：参数有误, 500: 服务端出错]
  data: [
    {
      directoryName: string, // 文件夹名称
      path: string // 绝对路径
    }
  ], // 数据 -
  msg: string
}
```

### `[get]` 获取启动项目的路径 - `/api/file/getStartCliPath`

- 参数

```js
无
```

- 响应

```js
{
  code: number, // 状态 - [200: 正常，400：参数有误, 500: 服务端出错]
  data: string, // 数据 -
  msg: string
}
```
