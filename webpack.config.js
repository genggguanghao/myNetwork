const HtmlWebpackPlugin = require('html-webpack-plugin')
const {join} =require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin'); //copy不需要编译的东西
const argv = require('yargs-parser')(process.argv.slice(2));//得到package.json中的mode数据
console.log("得到的参数时", argv.mode);
const _mode = argv.mode || "development";//取出来操作是生产环境还是开发环境
const _modeFlage = (_mode == "development" ? false : true)
const _mergeConfig = require(`./config/webpack.${_mode}`);//根据环境引入不同的文件
const webpackMerge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');//打包后通知
const { resolve } = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//const htmlAfterPlugin = require("./config/htmlAfterPlugin.js")
const CleanWebpackPlugin = require('clean-webpack-plugin')//每次删除上次打包文件
//const glob =require("glob");
//const files = glob.sync("./src/webapp/views/**/*.entry.js");
//需要处理的入口文件  借助插件 gloal
let webpackOptions = {
  entry: './src/webapp/main.js',
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'element-ui': 'ELEMENT'
  },
  mode:  _modeFlage?'production':"development",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: MiniCssExtractPlugin.loader,//这个用来提取css拿出来,js减小
            options: {
            }
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true //css压缩
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: "img/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  optimization: {//一些公共配置
    noEmitOnErrors: false,//如果编译时报错，是否继续编译下去
    //namedChunks 这两个属性在多页时很重要
    //moduleIds  这两个属性在多页时很重要
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          name: "common",//设置有公共文件提取到common目录下
          minChunks: 2,//引入两次以上的包设置提取出来 但是如果包小于30KB包并不会打出来
          maxInitialRequests: 5,
          minSize: 0
        }
      }
    },//把chunk分开
    runtimeChunk: {
      name: "runtime"//把webpack 进行时的文件单分离开来
    }
  },
  profile: true,//监控编译的时间以及性能
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: _modeFlage ? "css/[name].[contenthash:5].css" : "css/[name].css",//根据生产上线环境判断是否加MDS
      chunkFilename: _modeFlage ? "css/[name].[contenthash:5].css" : "css/[name].css"
    }),
    new HtmlWebpackPlugin({//把js css插入到layout的制定位置需要写webpack插件
      filename: '../index.html',
      template: 'index.html'
      // chunks:["runtime",'common',""],//给每个html设置单独一一对应的js 同名的js以及runtime 还有common
      //loading,//把loading引入到这里  可以根据chuank 加载js的加载文件的多少控制loading进度条
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
          from:join(__dirname,"./"+"logo.ico"),
          to:""
      },
      new CopyWebpackPlugin([
        {
            from:join(__dirname,"./"+"/src/webapp/assets/img/article"),
            to:"img"
        }

   ]),

 ]),
    //老袁tips： webpack-build-notifier 打完包以后弹框通知
    new WebpackBuildNotifierPlugin({
      title: "客官，包好了",//设置打包名字
      logo: resolve("./favicon.png"),//设置弹框图标
      suppressSuccess: true
    }),
    new CleanWebpackPlugin(["dist"])
  ]
}
//smp.wrap  打包时间的控件要把配置文件包起来 
module.exports = webpackMerge(_mergeConfig, webpackOptions);//外部引入的配置在前，内部写的配置在后。防止内外配置冲突