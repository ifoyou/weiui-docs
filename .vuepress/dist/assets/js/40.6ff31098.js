(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{297:function(a,e,t){"use strict";t.r(e);var s=t(2),r=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"创建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建项目")]),a._v(" "),t("blockquote",[t("p",[a._v("执行此节之前，请确保"),t("code",[a._v("必须的环境")]),a._v("全都安装完成。")])]),a._v(" "),t("h2",{attrs:{id:"生成开发模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成开发模板","aria-hidden":"true"}},[a._v("#")]),a._v(" 生成开发模板")]),a._v(" "),t("p",[a._v("使用 weiui-cli 的 create 命令来创建模版工程：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("weiui create "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("AppName"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("脚手架会自动从 github 上拉取最新的 "),t("a",{attrs:{href:"https://github.com/kuaifan/weiui-template",target:"_blank",rel:"noopener noreferrer"}},[a._v("weiui-template 开发模板"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("然后进入开发目录，执行 "),t("code",[a._v("npm i")]),a._v(" 加载"),t("code",[a._v("node_modules")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("AppName"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" i\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run serve\n")])])]),t("h2",{attrs:{id:"ios-运行项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ios-运行项目","aria-hidden":"true"}},[a._v("#")]),a._v(" iOS 运行项目")]),a._v(" "),t("p",[a._v("确保您已经安装完成 "),t("a",{attrs:{href:"/start/env"}},[a._v("iOS 所需环境")]),a._v("。")]),a._v(" "),t("p",[t("code",[a._v("cd")]),a._v("到iOS工程目录"),t("code",[a._v("platforms/ios/WeexWeiui")]),a._v(" 执行"),t("code",[a._v("pod install")]),a._v("命令来拉取iOS工程的依赖")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("pod "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),t("p",[a._v("首次执行时间会稍长，命令执行完毕后找到当前目录下 "),t("code",[a._v("WeexWeiui.xcworkspace")]),a._v(" 文件，双击即可唤起XCode打开 iOS 工程；")]),a._v(" "),t("p",[a._v("然后在XCode选择相应的模拟器（比如iPhone 8），点击"),t("code",[a._v("▶")]),a._v("按钮来运行项目。")]),a._v(" "),t("h2",{attrs:{id:"android-运行项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android-运行项目","aria-hidden":"true"}},[a._v("#")]),a._v(" Android 运行项目")]),a._v(" "),t("p",[a._v("确保您已经安装完成 "),t("a",{attrs:{href:"/start/env"}},[a._v("Android 所需环境")]),a._v("。")]),a._v(" "),t("p",[a._v("1.打开"),t("code",[a._v("AndroidStudio")]),a._v("软件然后"),t("code",[a._v("Open")]),a._v("Android工程目录"),t("code",[a._v("platforms/android/WeexWeiui")]),a._v("。\n2.待项目构建完成，点击 AndroidStudio 上方工具栏的 "),t("code",[a._v("Run")]),a._v("，即可运行项目。")]),a._v(" "),t("blockquote",[t("p",[a._v("第一次打开 AndroidStuido 时，由于本地环境未配置好，AndroidStuido 会提示错误，按照 IDE 提示，点击 "),t("code",[a._v("sync")]),a._v(" 同步一下，大部分环境问题都可以解决。")])]),a._v(" "),t("p",[a._v("注：")]),a._v(" "),t("ul",[t("li",[a._v("可能您第一次构建的时间太长您也可以尝试"),t("a",{attrs:{href:"https://www.jianshu.com/p/ba8189146a6b",target:"_blank",rel:"noopener noreferrer"}},[a._v("解决 Android Studio 第一次导入项目太慢"),t("OutboundLink")],1),a._v("。实在不行就请耐心等待 Android Studio 自己构建完成吧")])]),a._v(" "),t("h2",{attrs:{id:"模板目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模板目录结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 模板目录结构")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("├── config                  // webpack相关配置\n├── dist                    // 静态资源生成目录\n├── node_modules            // 依赖\n├── plugins                 // 平台插件程序\n├── platforms               // 平台基础代码\n│   ├── android\n│   └── ios\n├── src                     // 开发路径\n├── statics                 // 静态资源\n├── web                     // vue访问目录\n├── weiui.config.js         // 客户端相关配置\n└── package.json            // "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" 项目及依赖说明\n")])])]),t("p",[a._v("首次打开我们已经为您内置了由一些 "),t("code",[a._v("demo")]),a._v("，您可以看到相关的页面，下面在开发之前还需要进行一些相关的配置和调试的学习。")])])},[],!1,null,null,null);e.default=r.exports}}]);