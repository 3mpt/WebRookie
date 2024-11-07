/* 
    生产环境主要实现的是压缩代码，提取css文件、合理的sourceMap、分割代码
    需要安装以下模块:
    webpack-merge 合并配置
    copy-webpack-plugin 拷贝静态资源
    optimize-css-assets-webpack-plugin已废弃使用css-minimizer-webpack-plugin压缩css
    uglifyjs-webpack-plugin已废弃使用terser-webpack-plugin 压缩js
*/
const path = require('path')
const webpackConfig = require('./webpack.config')
const WebpackMerge = require("webpack-merge")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = WebpackMerge(webpackConfig, {
    mode: 'production',
    plugin: [
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../public'),
            to: path.resolve(__dirname, '../dist')
        }])
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,         // 启用缓存，提高构建速度
                parallel: true,     // 启用多进程并行处理
                sourceMap: true,    // 生成 SourceMap，用于调试
            }),
            new CssMinimizerPlugin({})
        ],
        splitChunks:{
            chunks:'all',
            cacheGroups:{
                libs:{
                    name:"chunk-libs",
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: "initial" // 只打包初始时依赖的第三方
                }
            }
        }
    }
})