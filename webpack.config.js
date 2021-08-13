// ./webpack.config.js
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/main.js",

  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },

  plugins: [new CleanWebpackPlugin()],

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
