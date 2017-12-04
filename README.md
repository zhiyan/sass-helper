# sassHelper

# 配置
sass插件的option中增加如下字段:
includePaths: require('sass-helper').includePaths

### sass-helper贡献代码
1. 本地开发完成,commit && push
2. 生成新的tag: `npm version patch|minor|major` 分别对应生成修订版本号更新，小版本号更新，大版本号更新
3. 将tag push到远端: git push --tags

### 项目引用
package.json:
"sass-helper": "git+http://gitlab.dev.daikuan.com/npm/sass-helper.git#v2.2.0", 需要跟tag号

### 颜色变量

* $main-color: 易鑫logo红，网站主色
* $sub-color: 辅助色，蓝
* $black-color: 纯黑色
* $dark-color: 深色文本
* $normal-color: 正常文本
* $light-color: 浅色文本
* $lighter-color: 更浅色文本
* $lightest-color: 最浅色文本
* $white-color: 白色
* $success-color: 成功绿
* $warn-color: 提示黄
* $error-color: 错误红
* $background-color: 默认背景
* $disabled-color: 禁用状态按钮背景
* $placeholder-color: 文本框placeholder的颜色
* $warn-background-color: 普通提醒背景色
* $icon-color: icon线框色

### 布局变量

* $main-line-height: 通用line-height, 1.5
* $main-border-radius: 5px
* $sub-border-radius: 3px
* $mask-opacity: 遮罩层透明度
* $mask-background-color: 遮罩层背景颜色
