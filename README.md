# Project for MyApp

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
