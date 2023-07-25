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

```
assets: -----静态资源目录
base-ui:-----可复用组件模版
components---组件
hooks
router
services
utils
views
```

### webpack配置

安装 npm i @craco/craco

修改`package.json`文件

```
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

在项目根目录下创建`craco.config.js`

1. 配置项目别名craco.config.js

```
 webpack: {
    //配置别名
    "@": resolve("src"),
    components: resolve("src/components"),
    utils: resolve("src/utils"),
  },
```

将App的路径改为@/App测试是否生效

2. 配置less

npm i craco-less -S

```
//less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
```

#### 整体`craco.config.js`配置

```
const path = require("path");
const CracoLessPlugin = require("craco-less");
// 将当前目录和文件名拼接
const resolve = (pathname) => {
  console.log(path.resolve(__dirname, pathname));
  return path.resolve(__dirname, pathname);
};
module.exports = {
  webpack: {
    alias: {
      //配置别名
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
    },
  },
  //less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
};

```

创建一个index.less测试是否生效

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