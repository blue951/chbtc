var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: ['./src/main.js',  //配置第一个入口文件用到的js，数组可存放多个入口文件
          //'./src/second.js', //加了第二个入口会导致组件渲染两次，store注入也会失败   
        ]
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' //production
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json','.less'],// add .less
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'jquery': 'jquery',//resolve(__dirname,'../node_modules/jquery/dist/jquery'),
    }
  },
  devtool: 'source-map',
  module: {   
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ],
        include: [   // 关键代码
          path.resolve(__dirname,"src/style/less"),
        ]        
      },
      {
        test: /\.less$/,
        use: [ 'style-loader', 'css-loader', 'less-loader' ],
        include: [  
          path.resolve(__dirname,"src"),
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
        // ,  这里不可以加路径
        // include: [  
        //   path.resolve(__dirname,"src/style/img"),
        // ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.svg$/,
        use: [ 'svg-loader' ],
        include: [  
          path.resolve(__dirname,"src/style"),
        ]
      },
    ]
  },
  plugins: [ //开启生产模式
    new webpack.DefinePlugin({
      'process.env': {
        //NODE_ENV: '"development"'
        NODE_ENV: '"production"'
      }
    }),
    new webpack.ProvidePlugin(//全局引入jquery
        {
          $: "jquery",
          jQuery: "jquery",
          mag:"magnificent/src/js/mag.js",
        }
      ),
  ],
}
