# vue-app-base

1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构
2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具）
3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务
4. 尽可能的使用上所有你了解到的功能和特性

## ESLint & Prettier

### ESLint: 配置文件移除 package.json 中的 `eslintConfig`，单独配置

```sh
npm install eslint eslint-plugin-vue --save-dev

# 配置文件 -> ./.eslintrc.js
./node_modules/.bin/eslint --init
```

### Prettier: [./prettierrc.js](./.prettierrc.js)

```sh
npm i -D prettier eslint-plugin-prettier eslint-config-prettier
```

```js
// ./.eslintrc.js
{
  parser: 'vue-eslint-parser',
}
```

---

## [Stylelint](https://stylelint.io/user-guide/get-started)

```sh
npm install --save-dev stylelint stylelint-config-standard
npm i -D stylelint-webpack-plugin
```

### 配置文件 ： [.stylelintrc.js](./.stylelintrc.js)

---

## Git Hooks

```sh
npm install -D husky lint-staged
```

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": ["eslint", "git commit"]
  }
}
```

---

## Webpack

```sh
npm i -D webpack webpack-cli webpack-merge
```

### 1. entry & output

### 2. mode

#### SourceMap: `devtool`

- `eval-cheap-module-source-map`: 开发环境
- `none`: 生产环境 webpack@5 不再支持
- `nosources-source-map`: 生产环境

### 4. Loader

#### [vue-loader](https://vue-loader.vuejs.org/zh/guide/#%E6%89%8B%E5%8A%A8%E8%AE%BE%E7%BD%AE)

```sh
npm install -D vue-loader vue-template-compiler
```

#### babel-loader

```sh
npm i -D @babel/core @babel/preset-env babel-loader
```

#### eslint-loader

#### css-loader & vue-style-loader & MiniCssExtractPlugin.loader(生产环境)

#### 静态资源加载

- file-loader
- url-loader
- Webpack@5: - [asset modules](https://webpack.js.org/guides/asset-modules/)
  - `type`:
    - `asset/resource` : `file-loader`
    - `asset/inline` : `url-loader`
    - `asset/source` : `raw-loader`
    - `asset` : using `url-loader` with asset size limit, a file with size less than 8kb ({ limit: 8192 })will be treated as a `inline` module type and `resource` module type otherwise.

### 5. Plugins

- 生产环境优化：自动清除输出目录插件：[clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)
- 自动生成使用 bundle.js 的 html：[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)
- [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)

### 6. Webpack Dev Server - [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

> [development guide](https://webpack.js.org/guides/development/)

```sh
npm install --save-dev webpack-dev-server
```

### 7. [Webpack HMR(热替换)](https://webpack.js.org/guides/hot-module-replacement/#enabling-hmr)

- html/css

```js
{
  devServer: {
    hot: true,
  }
}
```

### 8. Webpack DefinePlugin - 为代码注入全局成员

### 9. [Webpack Tree Shaking](https://webpack.js.org/guides/tree-shaking/) - 移除未引用代码

- `production` 自动启用
- 手动启用
  ```js
  {
    mode: 'development',
    optimization: {
      usedExports: true,
      minimize: true,
    },
  }
  ```

### 10. Webpack 合并模块(Scope Hoisting) - [concatenateModules](https://webpack.js.org/configuration/optimization/#optimizationconcatenatemodules)

- `production` 自动启用
- 手动启用

  ```js
  module.exports = {
    //...
    optimization: {
      concatenateModules: true,
    },
  };
  ```

### 11. 提取公共模块

```js
{
  optimization: {
    splitChunks: {
      chunks: 'all';
    }
  }
}
```

### 12. 按需加载: 动态导入

```js
import(/* webpackChunkName: 'components' */ '../posts/posts').then(
import(/* webpackChunkName: 'components' */ '../albums/album').then(
```

### 13 Webpack 输出文件名 hash

```js
{
  output: {
    // filename: 'bundle.js',
    // filename: '[name].bundle.js',
    // ! [cache: hash](https://webpack.js.org/guides/caching/)
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, 'output'),
    assetModuleFilename: 'images/[name]-[contenthash][ext][query]',
  },
}
```
