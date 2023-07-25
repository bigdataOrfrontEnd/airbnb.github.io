# 艾比邻项目笔记

## 脚手架创建项目

### 创建React项目

- 创建项目的方法:npx create-react-app

- 项目配置:

  - 配置项目的icon: <link rel="icon" href="%PUBLIC_URL%/Airbnb.png" />
  - 配置项目的标题:  <title>度假房源和公寓出租 - 爱彼迎 - 爱彼迎</title>
  - 配置jsconfig.json

  ```js
  {
    "compilerOptions": {
      "target": "ES5",
      "module": "ESNext",
      "baseUrl": "./",
      "moduleResolution": "node",
      "paths": {
        "@/*": ["src/*"]
      },
      "jsx": "preserve",
      "lib": ["ESNext", "DOM", "DOM.Iterable", "ScriptHost"]
    }
  }

  ```

  ​

### 项目目录结构配置

### webpack配置

1. 配置项目别名
2. 配置less或

### CSS样式的重置

1. 使用normalize.css 要引入
2. 创建reset.less
3. 定义一个variables.less存放颜色

在index.less中统一导入

### 全家桶-Router配置

1. 安装路由
2. 进行配置

### 全家桶-Redux状态管理

### 网络请求-axios