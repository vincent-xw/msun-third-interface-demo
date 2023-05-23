import Axios from 'axios';

const instance = Axios.create({
  baseURL: '',
  timeout: 10000
});
const requestInterceptor = config => {
  return config;
};
instance.interceptors.request.use(requestInterceptor);
const responseInterceptor = response => {
  return response;
};
instance.interceptors.response.use(responseInterceptor);

const aFun = async () => {
  const result = await instance.get('/hp/api/v1/trivia?format=json&id=HPQuiz_20230523_WesternBoxTurtle&toWww=1&redig=E38355D93C4641FB9B83ECB7DFAB33F3');
  return result;
};

const bFun = param => {
  return new Promise((resolve, reject) => {
    try {
      resolve({
        param,
        name: 'bFun'
      });
    } catch (error) {
      reject(error);
    }
  });
};

const cFun = data => {
  return {
    aResult: data.param,
    bResult: data.name
  };
};

// 每个核心模块的入口，组织好你的模块代码就好，这里不做过多限制
// 假设我们要输出一个方法
const toBeExposedFun = async () => {
  // 它的功能由A/B/C三个模块组成
  const aResult = await aFun();
  const bResult = await bFun(aResult);
  return cFun(bResult);
};

export { toBeExposedFun };
//# sourceMappingURL=bundle.js.map
