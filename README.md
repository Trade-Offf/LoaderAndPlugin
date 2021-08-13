开发一个可以加载 markdown 文件的加载器，以便可以在代码中直接导入 md 文件;

markdown 一般是需要转换为 html 之后再呈现到页面上的，所以我希望导入 md 文件后，直接得到 markdown 转换后的 html 字符串;

markdown Loader用到了marked模块，需要npm安装。用来将Markdown解析为HTML模块
$ npm i marked