# 开发调试

## 实时预览
weiui 支持实时同步预览，即修改完代码可以立即查看效果

##### 开启开发服务

只需要在项目根目录中起开发服务：

```bash
npm run serve
```

脚手架会在项目根目录下生成 dist 文件，存放 JS Bundle。

**注**：使用`真机`调试需要将手机与起服务的`[pc|mac]`连接到**同一个局域网内！！！**

## 热刷新
weiui 现已支持热刷新，即修改完代码保存（command + s 或 ctrl + s）的时候，页面会自动刷新

- 点击app屏幕上的`DEV`--> `WiFi真机同步`按要求输入服务生成的`IP地址`、`端口号`即可完成同步刷新。
- 或点击app屏幕上的`DEV`--> `扫一扫`扫描`npm run serve`打开的页面上的`WiFi QRCode`即可完成同步刷新。

**注**：热刷新只有在`npm run [serve|dev]`起服务下才会生效 

