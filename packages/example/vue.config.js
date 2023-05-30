/* eslint-disable */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    hot:false,
    proxy: {
      '/hp': {target: 'https://cn.bing.com'}
    }
  },
  lintOnSave: false
})
