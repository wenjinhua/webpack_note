const path = require('path');

//单一入口
// module.exports = {
//     entry: './src/index.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     }
// }
//path是mode的path模块
//path.resolve：拼接路径，若函数中的第二个参数:
//1）以/开头，则不会拼接到前面的路径，2）若以../开头，则拼接前面的路径，且不包含前面路径的最后一节路径，3）若以./或没有符号开头，则拼接前面的路径
//_dirname：总是指向被执行js文件的绝对路径



//多个入口
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const webpack = require('webpack');
module.exports = {
    entry: {
        app: './src/index.js',
        // print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'output management'
        }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModulesReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        'contentBase': './dist',
        'hot': true
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    mode: 'production'
}