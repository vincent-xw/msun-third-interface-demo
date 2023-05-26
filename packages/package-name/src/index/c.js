import { Dialog } from "msun-ui-pro";
import footer from "./components/footer.vue";
export const cFun = (data) => {
  Dialog(
    {
      props: {
        title: "222",
        header: 12121212,
        content: "<div>content</div>",
        footer,
      },
    },
    (instance) => {
      console.log("instance :>> ", instance);
    }
  );
  Dialog({ props: { title: "11111", header: "header" } }, (bb) => {
    console.log("bb :>> ", bb);
  });
  return {
    aResult: data.param,
    bResult: data.name,
  };
};
