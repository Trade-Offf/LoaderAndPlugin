// ./webpack.config.js

module.exports = {
  entry: "./src/main.js",

  output: {
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.md$/,

        // 直接使用相对路径

        use: ["html-loader", "./markdown-loader2"],
      },
    ],
  },
};
