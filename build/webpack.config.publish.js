const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

const DIST_JS_PATH = path.resolve(__dirname, '../dist')
const NODE_MODULES_PATH = path.resolve(__dirname, '../node_modules')
const SRC_PATH = path.resolve(__dirname, '../src')

module.exports = {
    entry: {
        Unar: './src/Instance/index.js',
    },
    output: {
        path: DIST_JS_PATH,
        publicPath: '../dist',
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                enforce: 'pre',
                exclude: NODE_MODULES_PATH,
                include: SRC_PATH,
                use: "eslint-loader"
            },
            {
                test: /\.js$/,
                exclude: NODE_MODULES_PATH,
                include: SRC_PATH,
                use: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false // 在UglifyJs删除没有用到的代码时不输出警告  
            },
            comments: false, // 删除所有的注释
            mangle: {
                except: ['Unar'] //避免关键字被混淆
            }
        })
    ]
}