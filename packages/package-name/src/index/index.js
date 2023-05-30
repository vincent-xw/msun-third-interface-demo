import { aFun } from "./a";
import { bFun } from "./b";
import { cFun } from "./c";
import { Dialog } from "msun-ui-pro";
import footer from "./components/footer.vue";
// 每个核心模块的入口，组织好你的模块代码就好，这里不做过多限制
// 假设我们要输出一个方法
const toBeExposedFun = async () => {
  // 它的功能由A/B/C三个模块组成
  const aResult = await aFun();
  const bResult = await bFun(aResult);

  // 假设有并行操作 可以用promise all
  return cFun(bResult);
};

/**
 * 这个函数示例了一个带hook回调的示例。
 * 我们假设用户在使用我们这个方法的时候，会先给我们传一组参数params
 * params里面包含
 * data，我们需要的用户入参
 * 我们可以给用户返回一个基于promise封装的异步回调
 */
const hookFunDemo = (params = {}) => {
  // 我们返回一个promise作为我们本次操作的结果
  return new Promise((resolve) => {
    // 这里拿到的data就是用户传来的
    const data = params.data;

    // // 假设我们通过一系列操作同我们得服务端进行交互
    // const result = {
    //   code: 0,
    //   msg: "这是服务端返回的数据，不需要后续操作",
    // };
    // // 假设服务端返回结果没问题，我们直接通知业务方结果
    // resolve({ data: result });
    // 假设服务端返回需要弹窗干预，我们先进行弹窗干预，再通过弹窗的干预结果给用户返回操作结果
    const result2 = {
      code: 1,
      msg: "这是服务端返回的数据，需要弹窗干预",
      data: data,
    };
    resolve({
      data: result2,
      nextStep: () => {
        return new Promise((res) => {
          Dialog(
            {
              props: {
                title: "222",
                header: 12121212,
                content:
                  "<h1 style='color: #f00'>content11 <img src='https://www.baidu.com' onerror='alert(123)'></h1>",
                ok: "确认",
                cancel: "取消",
                // footer,
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
        });
      },
    });
  });
};
export { toBeExposedFun, hookFunDemo };
