# bytes-sixth-cli

## 下载

```sh
git clone https://github.com/bytes-sixth/bytes-sixth.git
```

## 安装依赖

```sh
cd bytes-sixth/packages/bytes-sixth-cli
yarn
```

## 开发运行

```sh
yarn build:ui
yarn dev
```

打开 http://localhost:8888 查看

## 目录结构

```
├── bin
│   └── cli.js          # cli 入口
├── package.json
├── script
│   └── build.js        # 编译并复制 UI 文件
├── src
│   ├── index.js
│   ├── command         # 命令目录,其中的命令会在 index.js 文件中绑定
│   │   ├── create.js
│   │   └── ui.js
│   ├── server          # 服务端目录,存放服务端相关文件
│   │   ├── index.js    # 服务端入口,导出一个创建服务函数
│   │   └── router.js
│   └── util
│       ├── download.js
│       ├── index.js
│       ├── log.js
│       └── spawn.js
└── yarn.lock
```

## TODO

- [ ] CLI
- [ ] API
  - [ ] post 创建项目
  - [ ] get 获取是否结束
