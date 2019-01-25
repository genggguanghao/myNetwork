const {join} =require("path");
module.exports ={
     output:{
         path:join(__dirname,"../dist/assets"),
         publicPath:"/",
        filename:"js/[name].bundles.js",//不能设置目录名字assets 因为设置了静态资源目录。
    },
  plugins: [
    
      ]
}