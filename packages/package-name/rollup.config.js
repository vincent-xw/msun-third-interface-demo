import vue from 'rollup-plugin-vue2';
import url from '@rollup/plugin-url';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';
import path from 'path';
import * as VueTemplateCompiler from 'vue/compiler-sfc';
import postcss from 'rollup-plugin-postcss';
import { createRequire } from "module";

import { babel } from '@rollup/plugin-babel';

// 构建 require 用于导入 json 文件
const require = createRequire(import.meta.url);

// 导入 msun-lib-ui 的 package.json
const pkg = require("./package.json");

import { fileURLToPath } from "url";
let __dirname = fileURLToPath(new URL(".", import.meta.url));

// 获取 外部依赖
function getExternal() {
  return [...Object.keys(pkg.dependencies ?? {}), ...Object.keys(pkg.peerDependencies ?? {})];
}

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
    sourcemap: true,
  },
  external: getExternal(),
  plugins: [
    alias({
      entries: [
        {
          find: '@',
          replacement: path.resolve(__dirname, './src'),
        },
      ],
    }),
    vue({
      template: {
        compiler: VueTemplateCompiler,
      },
    }),
    postcss({
      minimize: true,
      modules: true,
      use: {
          sass: null,
          stylus: null,
          less: { javascriptEnabled: true }
      }, 
      extract: true
    }),
    url(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
    }),
    resolve({
      extensions: ['.mjs', '.json', '.node', '.vue', '.js'],
    }),
    commonjs(),
    json(),
  ],
};
