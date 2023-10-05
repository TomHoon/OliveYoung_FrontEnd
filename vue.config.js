const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    // historyApiFallback: true,
    // 💕운영
        proxy: 'http://oliveyoungproject.shop'

    // 💕개발
    //  proxy: 'http://localhost:8082'
  }
})
