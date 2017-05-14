var ManifestPlugin = require('webpack-manifest-plugin')
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin")
var InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackChunkHash = require("webpack-chunk-hash")
var DashboardPlugin = require('webpack-dashboard/plugin')
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')


// 如果预先定义过环境变量，就将其赋值给`ASSET_PATH`变量，否则赋值为根目录
const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = {
    entry: {
        'index': path.join(__dirname, '/../src/index.js'),
    },

    output: {
        path: path.join(__dirname, '/../dist'),
        /**
         * hot热替换模式不支持chunkhash
         */
        // filename: '[name].[chunkhash].js',
        publicPath: ASSET_PATH,
        sourceMapFilename: '[name].map'
    },

    resolve: {
        extensions: ['.ts', '.js', '.json'],
        // modules: [path.join(__dirname, 'src'), 'node_modules']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['env', { modules: false }]],
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            }
        ]

    },

    plugins: [

        new DashboardPlugin(),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
        }),

        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        }),


        new webpack.ProvidePlugin({
            // 当 identifier 被当作未赋值的变量时，module 就会自动被加载，并且 identifier 会被这个 module 输出的内容所赋值
            _m: 'moment',
        }),

    ]
}
