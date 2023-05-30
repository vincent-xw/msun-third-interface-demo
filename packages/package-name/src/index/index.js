import { aFun } from "./a";
import { bFun } from "./b";
import { cFun } from "./c";
// 每个核心模块的入口，组织好你的模块代码就好，这里不做过多限制
// 假设我们要输出一个方法
const toBeExposedFun = async () => {
  // 它的功能由A/B/C三个模块组成
  const aResult = await aFun();
  const bResult = await bFun(aResult);

  // 假设有并行操作 可以用promise all
  return cFun(bResult);
};

export { toBeExposedFun };
