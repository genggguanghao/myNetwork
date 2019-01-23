const {join} =require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin'); //copy不需要编译的东西
module.exports ={
     output:{
         path:join(__dirname,"../dist/assets"),
         publicPath:"/",
        filename:"js/[name].bundles.js",//不能设置目录名字assets 因为设置了静态资源目录。
    },
  plugins: [
        new CopyWebpackPlugin([
             {
                 from:join(__dirname,"../"+"/src/webapp/assets/img"),
                 to:"img"
             }

        ]),
    
      ]
}