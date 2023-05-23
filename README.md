# 众阳第三方对接sdk开发示范模板

> 本项目限制使用[pnpm](https://pnpm.io/zh/)作为包管理器进行开发，因为项目涉及到的[monorepo](https://pnpm.io/zh/workspaces)的相关功能目前仅有pnpm的到了较好的支持。相关概念，请参考各自链接。
> 
> 推荐的nodejs版本为nodejs 16+，如果你的其他项目需要其他版本的nodejs支持，尤其是更低版本，请安装nvm进行node版本管理

## 项目开发

* 全局安装pnpm

`npm install -g pnpm`

* 下载代码仓库

`git clone 本项目`

* 在项目根路径底下进行安装依赖

`pnpm install`

*注意，在根路径底下安装项目依赖，pnpm会根据workspace下的所有子项目进行分析并依次安装*

* 在项目根路径执行或者进入到项目子包内执行

`pnpm dev`

* 在项目根路径执行`pnpm example`或者进入example子包执行`pnpm run serve`
* example只是一个基础的vue项目作为测试sdk的项目，你们可以按照自己的需求将其调整为你们想使用的项目

* 最后在项目根路径执行或者进入到项目子包执行`pnpm build`对项目进行打包
