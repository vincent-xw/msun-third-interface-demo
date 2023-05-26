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
