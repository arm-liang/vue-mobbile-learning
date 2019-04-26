// import path from 'path'
// 配置文件不支持 ES6语法
const path = require('path');
// const styleLoader = require('style-loader');
// const cssLoader = require('css-loader');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 使用工具自动将打包生成的js文件添加到html中
const HtmlWebpackPlugin = require('html-webpack-plugin');
// require('webpack-html-plugin')

// 使用配置文件配合 webpack-dev-server 实现热部署，每当main.js改变了就自动重新编译部署
// 这个文件是webpack的配置文件
const config = {
  // 定义项目的打包模式 development | production
  mode: "development",

  // 定义项目的入口文件
  entry: {
    // 使用绝对路径
    main: path.join(__dirname, './src/main.js')
  },

  // 定义项目的打包之后的输入路径和文件
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },

  // 定义webpack-dev-server 的命令行参数
  // --open --port 80 --contentBase src --hot
  // devServer: {
  //   open: true,// 服务器启动之后打开浏览器
  //   port: 80,// 服务器的端口为80
  //   contentBase: 'src',// 服务器的静态资源文件的根路径为 src
  //   hot: true, // 启用热部署（部分打包文件，浏览器异步刷新）
  // },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    }),
    // 使用vue-loader插件
    new VueLoaderPlugin()
  ],

  // 定义第三方模块加载器，文件匹配和处理规则，用来打包其他的文件（比如css、vue、png)
  module: {
    // 定义所有第三方的所有匹配规则
    rules: [
      {// 定义一个处理的规则
        // test 是一个正则表达式，如果webpack处理不了，就会在test找到匹配的规则，然后交给第三方插件来处理
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // 使用这两个插件来处理css文件
      },
      {
        // 定义less文件的加载器
        test: /\.less$/,
        // 这里的use处理顺序，先将less用less处理，然后编程了css，在用css处理`
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        // 定义scss文件的加载器
        test: /\.scss$/,
        // scss-loader css处理历来css-loader style-loader
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        // 配置静态文件的加载器,加载这些静态文件
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        // 配置文件大小如果超过了30 000B（30KB）则不使用base64格式
        // 如果图片大小小于30KB则使用base64格式的图片
        // use: 'url-loader?limit=30000&name=[hash:8]-[name].[ext]'
        use: 'url-loader?limit=30000'
        // name=[name].[ext]使用原有文件的文件名和后置名，不然默认会使用文件的hash值
        // 图片资源默认会托管在 / 下面，如果文件名称一样就会覆盖，默认使用文件的ahsh值来避免文件重复
        // =[hash:8]使用8位的hash数值在加上文件名，
      },
      {
        // 配置字体的加载器
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: 'url-loader' // 也使用url-loader 处理字体文件
      },
      {
        // 配置 Babel
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        // 配置vue文件的加载器
        test: /\.vue$/,
        use: 'vue-loader'
      }

    ]
  },
  resolve: {
    // 添加导入的别名，如果是以vue结尾的直接替换为 dist下面的完整版的vue
    // alias: {
    //   "vue$": "vue/dist/vue.js"
    // }
  }


}

//导出配置文件
// export default config, 配置文件不支持ES6语法
module.exports = config