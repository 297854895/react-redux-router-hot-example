var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var devConfig = {
    entry:  [__dirname + "/src/client.js",hotMiddlewareScript ],
    output: {
     path: __dirname + "/dist",
     filename: "bundle.js",
     publicPath: publicPath
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: "json"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
        }
      ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
module.exports = devConfig;
