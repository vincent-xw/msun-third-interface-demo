# msun-ui-pro 众阳基础UI组件

励志做成不太依赖第三方UI库的基础UI组件

## dialog 对话框组件

使用方式
```js
import {Dialog} from 'msun-ui-pro'

Dialog(
  {
    props: {
      header: 12121212,
      content:
        "<h1 style='color: #f00'>content <img src='https://www.baidu.com' onerror='alert(123)'></h1>",
      ok: "确认",
      cancel: "取消",
      footer,
      onClose() {
        console.log("333333 :>> ", 333333);
        // return false;
      },
      onConfirm() {
        console.log("4444 :>> ", 4444);
        res("这是弹窗确认后返回的结果");
      },
      onCancel() {
        console.log("555 :>> ", 555);
        // return true;
      },
    },
  },
  (instance) => {
    console.log("instance :>> ", instance);
  }
);
```
|属性|类型|默认值|备注|
|---|---|---|---|
|header|string\|Vue component Object|提示|无|
|content|string\|Vue component Object|提示|无|
|footer|string\|Vue component Object|提示|无|
|ok|string|确认|确认按钮的文案|
|cancel|string|取消|取消按钮的文案|
|onConfirm|function|无|确认回调，默认按钮的确认，或者自定义组件通过$emit('onConfirm', secondParams)，secondParams 将会回调给onConfirm钩子|
|onCancel|function|无|取消回调，默认按钮的取消，或者自定义组件通过$emit('onCancel', secondParams)，secondParams 将会回调给onCancel钩子|
|onClose|function|无|取消回调，默认按钮的关闭，或者自定义组件通过$emit('onClose')|