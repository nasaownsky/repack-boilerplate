const path = require("path")

const webpack = require("webpack")
const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "../build"),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
})
