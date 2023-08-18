# 艾比邻项目笔记

不要假装努力，结果不会陪你演戏！

### 创建 React 项目

- 创建项目的方法:npx create-react-app

- 项目配置:

  - 配置项目的 icon: <link rel="icon" href="%PUBLIC_URL%/Airbnb.png" />
  - 配置项目的标题: <title>度假房源和公寓出租 - 爱彼迎 - 爱彼迎</title>
  - 配置 jsconfig.json

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

### webpack 配置

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

1. 配置项目别名 craco.config.js

```
 webpack: {
    //配置别名
    "@": resolve("src"),
    components: resolve("src/components"),
    utils: resolve("src/utils"),
  },
```

将 App 的路径改为@/App 测试是否生效

2. 配置 less

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

创建一个 index.less 测试是否生效

### CSS 样式的重置

1. 使用 normalize.css 要引入
2. 创建 reset.less
3. 定义一个 variables.less 存放项目通用的颜色

### 全家桶-Router 配置

爱比邻:有三个页面

1. 在 views 中创建三个文件夹 detail entire home,存放三个组件
2. npm i react-router-dom
3. 编写 routes ,并使用懒加载引入组件,会报错:Cannot read properties of undefined (reading 'lazy'),所以需要在入口组件中添加 Suspense fallback="loading",`现在可以不加了`
4. 在 App 中引入 routers

### 全家桶-Redux 状态管理

- Redux 状态管理的选择:

  - 普通方式:entire 使用
  - RTK:Home 中的数据使用

- home 中的 redux 配置

  - 安装 npm i @reduxjs/toolkit react-redux
  - 创建 store 并合并所有的 reducer

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

  - 创建 reducer

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

  - 在 App 中测试是否配置成功

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

- 普通方式创建 entire

```
目录结构:
entire
constants.js 存放公共常量
createAction.js 存放action
reducer.js 存放reducer
index.js 统一导出reducer
```

代码见:github 提交:"普通方式配置 redux"

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

具体代码见 github 提交:axios 配置并测试通过

### 问题

代码:

![](D:\workspace\airbnb\mdImg\问题1代码.png)

报错:

![](D:\workspace\airbnb\mdImg\报错日志1.png)

原因:第一次进来是没有数据的,(具体原因目前还没有想到)

解决:

方案 1:

```
{highScore.list && (
        <ul>
          {highScore.list.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      )}
```

方法 2:

```
{highScore?.list?.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
```

## 头部布局

由于三个页面中的 header 相似,而不是相同,所以我们有两个选择去写这个 header

1. header 使用一个实例,根据切换三个不同的页面,显示不同的 header,这个 header 是放在 App 组件里面的
2. header 在三个页面各写一个,作为页面的一部分去做

**目前采用有难度的第一个方式**

1. 将 header 按照组件去写,app-header 创建 index.js 中写 AppHeader
2. 将 footer 按照组件去写,app-footer 创建 index.js 中写 AppFooter

使用 css in js 的方式去写样式 npm i styled-components

#### 首页布局

```jsx
App组件中
<div className="app">
      <div className="">header</div>----后续要换成一个组件 AppHeader组件
      <div className="page">{useRoutes(routers)}</div>
      <div className="footer">footer</div>----后续换成一个组件
    </div>
```

创建 header 组件

```
//AppHeader组件
 <HeaderWrapper>
      <div className="left">left</div> --- HeaderLeft组件
      <div className="center">center</div>---HeaderCenter组件
      <div className="right">right</div>---HeaderRight组件
    </HeaderWrapper>
```

组件样式

效果图

![](D:\workspace\airbnb\mdImg\05效果图.png)

审查官网发现使用大量 svg 图片

处理方式:直接去官网复制 svg,然后修改里面的 style 的写法会使用如下的问题:

`style string to object`

创建 utils,将样式转换为对象的形式,

```js
function styleStrToObject(styleStr) {
  const obj = {};
  //这个是将-的第一个字母改为大写
  const s = styleStr
    .toLowerCase()
    .replace(/-(.)/g, function (m, g) {
      return g.toUpperCase();
    })
    .replace(/;\s?$/g, "")
    .split(/:|;/g);
  for (var i = 0; i < s.length; i += 2) {
    obj[s[i].replace(/\s/g, "")] = s[i + 1].replace(/^\s+|\s+$/g, "");
  }

  return obj;
}

export default styleStrToObject;
```

组件样式编写

```js
HeaderWrapper组件样式;
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 24px;
  height: 80px;
  border-bottom: 1px solid #eee;
`;
```

## 统一颜色管理

方式一 :

直接在 css 文件里面写

```css
//定义
:root{--primary-color}
使用:
@import"文件名"
 color:var(--primary-color)
```

方式二:

使用 styled-components

```js
定义
const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A",
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222",
  },
};
export default theme;
使用
入口文件导入index.js中
 <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
使用的地方就可以直接这样用了
 color: ${(props) => props.theme.text.primaryColor};
```

## header 完成

## Home 页面

### react 中图片处理

vue 中默认了 webpack 的配置,对图片无需过多的处理,react 把这部分交给开发者自己处理

图片的两种引入方式:

```
1. import coverImg from "路径"
2. 直接在引入的地方使用:require("路径")
```

### 配置后端数据在 redux 中

#### 使用 RTK

1. 初始化数据

2. 创建 reducer

3. 创建 action 用于存放后端请求接口

4. 派发异步请求事件

5. 将数据统一放入到 store 里面(目前使用第一种方式)

6. 使用 hooks 或其他方式拿到数据

   ### 高性价比房源样式编写

# 高评分模块

接口: /home/goodprice

# 热门目的地

接口:/home/discount

# 热门推荐

接口:/home/hotrecommenddest

# 最想去的地方

接口:/home/longfor

# plus 数据

接口:/home/plus

# 全局过滤条件的展示和选中

使用模拟的数据

# 请求数据

接口: /entire/list

## 问题

A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition

需要在入口处加入 Suspense,这个是 react 包里面的
