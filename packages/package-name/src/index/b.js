// 我们在这里演示了一个基于promise封装异步操作的例子
export const bFun = (param) => {
  return new Promise((resolve, reject) => {
    try {
      resolve({
        param,
        name: "bFun",
      });
    } catch (error) {
      reject(error);
    }
  });
};
