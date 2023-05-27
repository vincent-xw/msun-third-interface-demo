// 我们在这里演示了一个发起网络请求的例子
import { instance } from "../utils/request/index";
export const aFun = async () => {
  const result = await instance.get(
    "/hp/api/v1/trivia?format=json&id=HPQuiz_20230523_WesternBoxTurtle&toWww=1&redig=E38355D93C4641FB9B83ECB7DFAB33F3"
  );
  return result;
};
