/* 
    开发环境实现的主要是热更新，不压缩代码，完整的sourceMap
*/
const Webpack =require('webpack')
const webpackConfig = require('./webpack.config')
const WebpackMerge = require('webpack-merge')
module.exports = WebpackMerge(webpackConfig,{
    mode:"development",
    devtool:'cheap-module-eval-source-map',
    devServer: {
        port: 3000,
        hot: true,
        static: path.resolve(__dirname, '../dist')
    },
    plugin:[
        new Webpack.HotModuleReplacementPlugin()
    ]
})