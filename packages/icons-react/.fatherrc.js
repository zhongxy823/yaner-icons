// .fatherrc.js
const options = {
  entry: 'src/index.ts',
  doc: {
    title: 'yee-icons', // 标题
    themeConfig: { mode: 'light' }, // 主题色
    base: 'yee-icons/packages/icons-react/doc/', // 根路由
  },
  cssModules: false,
  extractCSS: true, // 是否将 css 抽离成单独的 css 文件
  lessInBabelMode: true, // 在 babel 模式下做 less 编译，基于 gulp-less，默认不开启
  // runtimeHelpers: true, // 是否把 helper 方法提取到 @babel/runtime 里
  esm: 'rollup', // 是否输出 esm 格式，以及指定 esm 格式的打包方式等
  cjs: 'rollup', // 是否输出 cjs 格式，以及指定 cjs 格式的打包方式等
};

export default options;
