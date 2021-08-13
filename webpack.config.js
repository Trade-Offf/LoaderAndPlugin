// ./webpack.config.js
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const RemoveCommentsPlugin = require("./remove-comments-plugin");

module.exports = {
  entry: "./src/main.js",

  mode: "none", // 不使用任何默认优化选项，让打包文件更易阅读

  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },

  plugins: [new CleanWebpackPlugin(), new RemoveCommentsPlugin()],

  module: {
    rules: [
      {
        test: /\.md$/,
        // 直接使用相对路径
        use: "./markdown-loader",
        // use: ["html-loader", "./markdown-loader"],
      },
    ],
  },
};
