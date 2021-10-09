const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool:'source-map',
  entry: __dirname + "/App/app.jsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/Public",
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.css$/,
        // the order of `use` is important!
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.svg$/, use: ["@svgr/webpack"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/, use: ["file-loader"]
      }
    ],
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },

}