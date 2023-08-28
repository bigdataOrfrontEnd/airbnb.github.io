const path = require("path");
const CracoLessPlugin = require("craco-less");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// 将当前目录和文件名拼接
const resolve = (pathname) => {
  console.log(path.resolve(__dirname, pathname));
  return path.resolve(__dirname, pathname);
};
module.exports = {
  webpack: {
    alias: {
      //配置别名
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
      assets: resolve("src/assets"),
    },
    //less
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "server",
        analyzerHost: "127.0.0.1",
        analyzerPort: 8888,
        openAnalyzer: true, // 构建完打开浏览器
        reportFilename: path.resolve(__dirname, `analyzer/index.html`),
      }),
    ],
  },
  //less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
};
