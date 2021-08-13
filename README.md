一、开发一个可以加载 markdown 文件的加载器，以便可以在代码中直接导入 md 文件;
markdown 一般是需要转换为 html 之后再呈现到页面上的，所以我希望导入 md 文件后，直接得到 markdown 转换后的 html 字符串;


二、开发一个Plugin插件能够自动清除 Webpack 打包结果中的注释，使 bundle.js 将更容易阅读。当然首先需要在webpack.config.js中配置mode: "none"，然后对打包的文件进行正则处理及文件替换