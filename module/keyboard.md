# 键盘功能

> 需要加载的模块

```js
const weiui = weex.requireModule('weiui');
```

## 动态隐藏软键盘

```js
weiui.keyboardHide()
```

## 判断软键盘是否可见
```js
/**
* @参数一      固定值
* 
* @返回 true|false
 */
let variable = weiui.keyboardStatus()
```