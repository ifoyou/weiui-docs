# weiui_webview

> `<weiui_webview>` 是一个网页容器。

## 子组件

无

## 示例代码

```vue
<template>
    <div class="app">

        <weiui_webview ref="reflectName" class="webview"> </weiui_webview>

    </div>
</template>

<style>
    .app {
        width: 750px;
        flex: 1;
    }

    .webview {
        flex: 1;
    }
</style>

<script>
    export default {
        mounted() {
            this.$refs.reflectName.setUrl('http://weiui.cc');
        }
    };
</script>
```


## 配置参数 `weiui`
>说明：ui自定义；数据格式：对象数据。

| 属性名           | 类型     | 描述                          | 默认值     |
| ------------- | ------ | -------------------------- | ------- |
| url |`String`  | 网页地址           | -       |
| content |`String`  | 网页内容           | -       |

> 例如：

```vue
<weiui_grid
    ref="reflectName"
    :weiui="{
        url: 'http://weiui.cc'
    }"></weiui_grid>
```

## 事件回调 `callback`

``` js
/**
 * 组件加载完成
 */
@ready = function() { ... }

/**
 * 状态发生改变
 * 返回参数：data = {
                    status:'success',         //状态，注①
                    
                    title: '网页标题',     //仅【status=title】存在
                    
                    errCode: '',     //仅【status=error】存在
                    errMsg: '',     //仅【status=error】存在
                    errUrl: '',     //仅【status=error】存在
                }
 */
@stateChanged = function(data) { ... }
```

> 注①：
- `start`开始加载
- `success`加载完毕
- `error`加载错误
- `title`标题发生改变

## 调用方法 `methods`

```js
/**
 * 设置浏览器内容
 * 参数一：详细内容
 */
this.$refs.reflectName.setContent(string);

/**
 * 设置浏览器地址
 * 参数一：地址，如果：http://weiui.cc
 */
this.$refs.reflectName.setUrl(url);

/**
* 是否可以后退
* 
* 回调 result: true|false
 */
this.$refs.reflectName.canGoBack(callback(result));

/**
* 后退并返回是否后退成功
* 
* 回调 result: true|false
 */
this.$refs.reflectName.goBack(callback(result));

/**
* 是否可以前进
* 
* 回调 result: true|false
 */
this.$refs.reflectName.canGoForward(callback(result));

/**
* 前进并返回是否前进成功
* 
* 回调 result: true|false
 */
this.$refs.reflectName.goForward(callback(result));
```


