antd-mobile按需加载先安装babel-plugin-import 然后在plugins里面配置

redux-trunk为中间件(作为异步请求数据)，需要使用applyMiddleware开启thunk中间件,主要来修改action-creater的异步书写方式

redux调试工具 
1.新建store的时候判断window.devToolsExtension
2.使用compose结合thunk和window.devToolsExtension
3.调试窗的redux选项卡，实时看到state


使用react-redux 来链接react跟redux，省去redux手动连接的繁琐操作
忘记subscribe,记住reducer，action和dispatch就行
react-redux提供provider 和connect两个接口来链接
Provider组件在最外层，传入store，只用一次
Connect负责从外部获取组件需要的参数,connect可以用装饰器写法
使用装饰器优化connect代码 需要 babel-plugin-transform-decorators-legacy 插件才能用@写法
安装插件后需要在package.json里babel加上plugins配置

React-router4
核心概念：动态路由、Route、Link、Switch
BrowserRouter,包裹整个应用
Route路由对应渲染的组件，可嵌套
Link跳转专用


