const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { VueLoaderPlugin } = require('vue-loader')
const Webpack = require('webpack')
const devMode = process.argv.indexOf('--mode=production') === -1
module.exports = {
    // 开发模式
    mode: 'development',
    // 入口文件 多入口
    entry: {
        main: path.resolve(__dirname, "../src/main.js"),
        header: path.resolve(__dirname, "../src/header.js"),
    },
    output: {
        // 打包后的文件名称
        filename: 'js/[name].[hash:8].js',
        // 打包后的文件路径
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: "js/[name].[hash8].js"
    },
    plugins: [
        // 打包生成的js文件自动引入到HTML中
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
            // 与入口文件对应的模块名
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/header.html'),
            filename: 'header.html',
            // 与入口文件对应的模块名
            chunks: ['header']
        }),
        // 清除之前的打包产物
        new CleanWebpackPlugin(),
        // 拆分css
        new MiniCssExtractPlugin({
            filename: devMode ? "[name].css" : "[name].[hash].css",
            chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
        }),
        // vue
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            // 从右到左解析原则
            // css
            {
                test: /\.css$/,
                use: [{
                    loader: devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: "../dist/css/",
                        hmr: devMode
                    }
                }, 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [require('autoprefixer')]
                        }
                    }
                }]
            },
            // less
            {
                test: /\.less$/,
                use: [{
                    loader: devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: "../dist/css/",
                        hmr: devMode
                    }
                }, 'css-loader', 'less-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [require('autoprefixer')]
                        }
                    }
                }]
            },
            // 图片文件
            {
                test: /\.(jpe?g|png|gif)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 10 KB 以下的图片会转为 Base64 格式
                    }
                },
                generator: {
                    filename: 'img/[name].[hash:8].[ext]' // 图片输出路径
                }
            },
            // 媒体文件
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 10 KB 以下的媒体文件会转为 Base64 格式
                    }
                },
                generator: {
                    filename: 'media/[name].[hash:8].[ext]' // 媒体文件输出路径
                }
            },
            // 字体
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 10 KB 以下的字体文件会转为 Base64 格式
                    }
                },
                generator: {
                    filename: 'fonts/[name].[hash:8].[ext]' // 字体文件输出路径
                }
            },
            // babel转义
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/
            },
            // vue
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        compilerOptions: {
                            preserveWhitespace: false // 禁用 Vue 编译时保留空格
                        }
                    }
                }]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm-bundler.js',
            ' @': path.resolve(__dirname, '../src')
        },
        extensions: ['.js', '.json', '.vue']
    }
}