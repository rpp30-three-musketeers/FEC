const path = require("path");
const webpack = require("webpack");
// const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
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
      }
    ],
  },

}