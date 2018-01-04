# react-mobx

## 使用
  - git clone https://github.com/xiaosunJessica/react-mobx.git
  - npm i
  - npm run dev
## npm init
   **finish JSX2js**
   - Babel全家桶
   ***
## study mobx
   __config decorator__
   - .babelrc中plugin相关配置
   - compose multiple stores

## compared redux and mobx
  1. store
    redux对应单一的store, mobx对应多个store
  2. 数据管理
     redux管理数据比较干净，mobx比较复杂
  3. 对store的修改
    redux中的store只读，mobx可以对store进行修改
  4. 数据对象
     redux是plain javascript, mobx通过使用observable对plain javascript进行包装
  5. 组件
      redux分smart组件和dumb组件，mobx无区分，都是smart组件。
