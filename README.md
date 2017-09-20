# **ReactNativePractice**

这是一个以实战为目的的项目，里面用到了react现有的比较流行的技术栈，比如：antdesign、redux、网络请求async await、pub/sub模式、热更新（react-native-code-push）以及导航系统（包括tabbar导航、navigantor导航、侧边栏导航的实现）,实现了很多常用功能的demo比如：扫描二维码、视频播放、地图集成以及应用。

### 用法

`git clone https://github.com/zhuchuanwu/ReactNativePractice.git`

安装第三方库：

`yarn`

之后就可以跑app了

**需要注意的是react-native用的是0.45以上的版本，所以如果运行过程中有问题，请参考http://reactnative.cn/post/4301**

项目截图：

<img src="https://ws4.sinaimg.cn/large/006tKfTcly1fjpzdz9ruaj30ku112425.jpg" style="zoom:35%" />÷                                        <img src="https://ws1.sinaimg.cn/large/006tKfTcly1fjpzebexbsj30ku112jxk.jpg" style="zoom:35%" />





<img src="https://ws4.sinaimg.cn/large/006tKfTcly1fjpze241nej30ku112dgs.jpg" style="zoom:35%" />÷                                        <img src="https://ws3.sinaimg.cn/large/006tKfTcly1fjpze8r6r9j30ku112whv.jpg" style="zoom:35%" />

# Project for ReactNativePratice

## Dependencies

* antd-mobile `界面布局 具体教程请看https://mobile.ant.design/index-cn`

## Configuration Files

### .git_ignore

```
# See https://help.github.com/ignore-files/ for more about ignoring files.

# dependencies
/node_modules

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# vscode debugger
.vscode/chrome
# exclude compiled css from scss
src/**/*.css

```
# Android Studio Navigation editor temp files
.navigation/

# Android Studio captures folder
captures/

# Intellij
.idea/
workspace.xml

# Keystore files
*.jks
### vscode

```
// 将设置放入此文件中以覆盖默认设置
{
    "editor.tabSize": 2,
    "editor.fontSize": 18,
    "files.eol": "\n",
    "files.insertFinalNewline": true,
    "files.exclude": {
        "**/.git": true,
        "node_modules": true,
        "build": true,
        "src/**/*.css": { //hide css file but scss
            "when": "$(basename).scss"
        },
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true
    },
    "explorer.openEditors.visible": 0,
    "terminal.integrated.confirmOnExit": true,
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"
}
```

### .eslintrc   
*  eslint配置 `http://www.jianshu.com/p/8b49e268fe69`

```
{
  "extends": ["airbnb", "react-app"],
  "rules": {
    "no-return-assign": "off" //在React中传出Ref的时候会用到箭头函数这个用法
  }
}
```
