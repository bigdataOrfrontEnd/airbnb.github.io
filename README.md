# 艾比邻项目笔记

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
3. 定义一个variables.less存放项目通用的颜色

### 全家桶-Router配置

爱比邻:有三个页面

1. 在views中创建三个文件夹detail   entire home,存放三个组件
2. npm i  react-router-dom
3. 编写 routes ,并使用懒加载引入组件,会报错:Cannot read properties of undefined (reading 'lazy'),所以需要在入口组件中添加Suspense fallback="loading",`现在可以不加了`
4. 在App中引入routers

### 全家桶-Redux状态管理

- Redux状态管理的选择:
  - 普通方式:entire使用
  - RTK:Home中的数据使用

- home中的redux配置

  - 安装 npm i @reduxjs/toolkit react-redux
  - 创建store并合并所有的reducer

  ```js
  //目录:store/index.js
  import { configureStore } from "@reduxjs/toolkit";
  import homeReducer from "./modules/home";
  console.log(homeReducer);
  export const store = configureStore({
    reducer: {
      home: homeReducer,
    },
  });
  export default store;
  ```

  - 创建reducer

    ```js
    import { createSlice } from "@reduxjs/toolkit";
    const initialState = {
      value: 0,
      countt: 1,
    };
    export const counterSlice = createSlice({
      name: "home", //用来进行切片的
      initialState,
      reducers: {
        incrementByAmount: (state, action) => {
          state.value += action.payload;
        },
      },
    });

    export const { incrementByAmount } = counterSlice.actions;

    export default counterSlice.reducer;
    ```

  - 在App中测试是否配置成功

    ```jsx
    import React from "react";
    import { useRoutes } from "react-router-dom";
    import { useSelector, useDispatch } from "react-redux";
    import routers from "./router/router";
    import { incrementByAmount } from "@/store/modules/home";
    export default function App() {
      const cout = useSelector((state) => state.home.value);
      const couteee = useSelector((state) => state.home.countt);
      const dispatch = useDispatch();

      return (
        <div>
          {useRoutes(routers)}
          {cout}
          {couteee}
          <button onClick={(e) => dispatch(incrementByAmount(1))}>+1</button>
        </div>
      );
    }

    ```

- 普通方式创建entire

```
目录结构:
entire
constants.js 存放公共常量
createAction.js 存放action
reducer.js 存放reducer
index.js 统一导出reducer
```

代码见:github提交:"普通方式配置redux"

### 网络请求-axios

目录

```
services
----modules
----request
	----config.js 存放URL和超时时间等基础配置
	----index.js 对axios进行二次封装
----index.js 统一导出文件
```

具体代码见github提交:axios配置并测试通过

### 问题

代码:

![](D:\workspace\airbnb\mdImg\问题1代码.png)

报错:

![](D:\workspace\airbnb\mdImg\报错日志1.png)

原因:第一次进来是没有数据的,(具体原因目前还没有想到)

解决:

方案1:

```
{highScore.list && (
        <ul>
          {highScore.list.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      )}
```

方法2:

```
{highScore?.list?.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
```

