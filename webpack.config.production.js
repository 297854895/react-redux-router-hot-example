var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'react-router'],
        app: [
            'babel-polyfill',
            './src/index'
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'assets/[name].[hash].js',
        chunkFilename: 'assets/[name].[chunkhash].js'
    },
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            loader: 'babel-loader',
            query: {
                "presets": [[ "es2015", { modules: false } ], "stage-2", "react"],
                "plugins": ['transform-async-to-generator', 'transform-decorators-legacy']
            }
        }, {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', options: { importLoaders: 2 , modules: true, sourceMap: true, localIdentName: '[path]___[name]__[local]___[hash:base64:5]'} },
              { loader: 'autoprefixer-loader', options: { browsers: 'last 2 version'} },
              { loader: 'less-loader', options: { sourceMap: true} }
            ]
          })
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file-loader?hash=sha512&digest=hex&name=assets/[hash].[ext]',
                'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.LoaderOptionsPlugin({
            test: /\.scss$/,
            debug: true,
            options:  {
                postcss: function() {
                    return [precss, autoprefixer];
                },
                context: path.join(__dirname, 'src'),
                output: {
                    path: path.join(__dirname, 'dist')
                }
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("assets/styles.css"),
        new HtmlWebpackPlugin({
            hash: false,
            template: './index.hbs'
        })
    ],
};
