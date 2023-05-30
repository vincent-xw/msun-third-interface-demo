// 我们在这个例子里面演示了众阳ui组件库的例子
import { Dialog } from "msun-ui-pro";
import footer from "./components/footer.vue";
export const cFun = (data) => {
  Dialog(
    {
      props: {
        title: "222",
        header: 12121212,
        content:
          "<h1 style='color: #f00'>content <img src='https://www.baidu.com' onerror='alert(123)'></h1>",
        // footer,
        ok: "确认",
        cancel: "取消",
        // footer,
        onClose() {
          console.log("333333 :>> ", 333333);
          // return false;
        },
        onConfirm() {
          console.log("4444 :>> ", 4444);
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
  // Dialog({ props: { title: "11111", header: "header" } }, (bb) => {
  //   console.log("bb :>> ", bb);
  // });
  return {
    aResult: data.param,
    bResult: data.name,
  };
};
