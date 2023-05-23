const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/hp': {target: 'https://cn.bing.com'}
    }
  }
})
