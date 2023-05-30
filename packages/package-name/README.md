# 业务模块开发文档

本模块开发使用到的技术如下
## 模块化——es module
当前项目使用的是rollup作为打包工具，rollup是默认完全支持es module的模块打包。并且，本项目配置了commonjs的包，对于开发者而言，不需要额外特殊关心。

## 关于导出

### 以``src/main.js``为例

```js
export * from "./index/index"
```
这句话的含义就是导出index模块所导出的所有模块，main模块做的东西就是为其他子模块创建一个统一的导出路径
我们得demo里面还有一个额外的导出
```js
export * from "./subindex/index"
```
我们得index里面导出了toBeExposedFun, subindex里面导出了个常量a，最终我们得导出将会是以下两个
```js
{
  toBeExposedFun,
  a
}
```
### 以 ``src/index/index.js``为例
导出可以分为两种，一种是默认导出，即很常见的``export default XXX``
另一种是模块导出。

我们继续解释模块导出，如果一个代码块如下
```js

const name = 'msunSoft'

const getName = () => name
```
如果我们想将两个模块都导出出去给别的模块使用,那么我们可以用如下的两种方法写

```js

export const name = 'msunSoft'

export const getName = () => name

~~~~~~~分割线~~~~~~

const name = 'msunSoft'

const getName = () => name

export {
  name,
  getName
}
```

而这里面的默认导出则是另一种语法,假设我们需要将我们得getName当做需要被默认导出的模块,我们只需要在export后面添加default即可

```js
export const name = 'msunSoft'

export default const getName = () => name

```

**默认导出和模块导出的差异我们在导入的时候会做进一步解释**

## 关于导入

与导出对照，导入所需要的语法是``import``

上面的例子，如果是模块导出，我们就使用解构导入

```js
这里导入的解构出来的变量名字要和导出的保持一致
import {a, getName} from '导出的模块路径'
```

如果是默认导出，则直接导入一个默认值
```js
假设到处的地方是这样
const a = 123;
export default a;
默认导入就是下面这样，这里默认导入的名字可以不和默认导出的一样
import aaa from '到处的模块路径'

这里的aaa 将会和 导出的a完全一样
```
