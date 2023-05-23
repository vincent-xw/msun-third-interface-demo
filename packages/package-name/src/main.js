// 这里是所有程序的主入口，这里只导出每个程序出口的程序。
// 比如我们的主要模块叫index，则这里直接导出index的程序
export * from "./index/index"
// 比如我们的次要模块叫做subindex，则这里再导出subindex的程序
export * from "./subindex/index"
// 到此主入口就应该结束了