/* 
    生产环境主要实现的是压缩代码，提取css文件、合理的sourceMap、分割代码
    需要安装以下模块:
    webpack-merge 合并配置
    copy-webpack-plugin 拷贝静态资源
    optimize-css-assets-webpack-plugin已废弃使用css-minimizer-webpack-plugin压缩css
    uglifyjs-webpack-plugin已废弃使用terser-webpack-plugin 压缩js
*/
const webpackConfig = require('./webpack.config')
const { merge } = require("webpack-merge")
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const chalk = require('chalk')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = merge(webpackConfig, {
    mode: 'production',
    devtool: 'source-map',  // 设置生成 source map
    plugins: [
        new ProgressBarPlugin({
            format: chalk.yellow(
              '打包中 [:bar] :current/:total :percent :elapseds :msg'
            ),
            complete: '●',
            incomplete: '○',
            width: 20
          })
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,     // 启用多进程并行处理
                terserOptions: {     // 可以添加额外的 terser 配置选项
                    format: {
                        comments: false,  // 移除注释
                    },
                },
                extractComments: false, // 不生成额外的注释文件
            }),
            new CssMinimizerPlugin()
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