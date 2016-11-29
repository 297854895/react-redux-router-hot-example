var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var devConfig = {
    entry:  [__dirname + "/src/client.js", hotMiddlewareScript ],
    output: {
     path: __dirname + "/dist",
     filename: "bundle.js",
     publicPath: publicPath
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.less$/,
          loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[path]___[name]__[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!less?outputStyle=expanded&sourceMap' 
        },
        {
          test: /\.json$/,
          loader: "json"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
        },
        {
          test: /\.png$/,
          loader: "url-loader?limit=10240"
        },
        {
          test: /\.jpg$/,
          loader: "url-loader?limit=10240"
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
