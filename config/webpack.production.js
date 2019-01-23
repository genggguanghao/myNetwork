const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");//css压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {join} =require("path");
module.exports = {
    output: {
        path:join(__dirname,"../dist/assets"),
        filename: "js/[name]-[contenthash:5].bundles.js",////注意：每次编译，代码的hash都是一致的，这会导致当我只改动一个文件时必须全文打包。
        //有些公司加chuankhash：5 这种只能用在不引入css的js文件中。当引入css时css也会相应的改变
        //有些公司只是在contenthash：5 可以把公用的所有文件都分离开来编译，一个文件改变不影响其他。前提是所有的输出文件都要加content
        publicPath: "/"//公司的cdn
    },
    performance: {
        hints: "warning", // 枚举
        maxAssetSize: 300000, // 整数类型（以字节为单位）
        maxEntrypointSize: 500000, // 整数类型（以字节为单位）
        assetFilter: function(assetFilename) {
        // 提供资源文件名的断言函数
        return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
        },
    plugins: [
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),//记得引进cssnano  可以hint css  可以去掉空类 以及属性
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        })
    ]
}
//注释： hash：5 改变所有文件的hash  chuankhash 只有同一个chuank下的文件  contenthash把当前的chuank文件再分开。各个文件都是独立
