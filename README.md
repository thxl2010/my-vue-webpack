# hello-world

> [vue@2.6](https://cn.vuejs.org/index.html)

> [Vue CLI@3.x](https://cli.vuejs.org/zh/)

> [View UI(iView@4) : view-design](https://www.iviewui.com/docs/introduce)

> [bug 监控](https://sentry.io)： http://sentry.hello.world.com/hello/hello-world-web/

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---

## [iView@4: view-design](https://www.iviewui.com/docs/guide/start)

- 借助插件 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)可以实现按需加载组件，减少文件体积

## [Vue CLI@3.x](https://cli.vuejs.org/zh/)

### [CSS Modules](https://cli.vuejs.org/zh/guide/css.html#css-modules)

可以通过 `<style module>` 以开箱即用的方式在 \*.vue 文件中使用 [CSS Modules](https://vue-loader.vuejs.org/zh/guide/css-modules.html)

### 处理静态资源

- 在 JavaScript 被导入或在 template/CSS 中通过相对路径被引用。这类引用会被 webpack 处理。
- 放置在 public 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理。

#### [URL 转换规则](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#url-%E8%BD%AC%E6%8D%A2%E8%A7%84%E5%88%99)

- 如果 URL 是一个绝对路径 (例如 /images/foo.png)，它将会被保留不变。

- 如果 URL 以 `.` 开头，它会作为一个相对模块请求被解释且基于你的文件系统中的目录结构进行解析。

- 如果 URL 以 `~` 开头，其后的任何内容都会作为一个模块请求被解析。这意味着你甚至可以引用 Node 模块中的资源：

  ```
  <img src="~some-npm-package/foo.png">
  ```

- 如果 URL 以 `@` 开头，它也会作为一个模块请求被解析。它的用处在于 Vue CLI 默认会设置一个指向 `<projectRoot>/src` 的别名 `@`。(仅作用于模版中)

- CSS 中以 `~@`开头

  ```
  @import '~@/assets/css/components/variables.styl';
  ```

### [环境变量和模式](https://cli.vuejs.org/zh/guide/mode-and-env.html)

```
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入 vue-cli-service build --mode mode
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

- 模式 mode

  默认情况下，一个 Vue CLI 项目有三个模式：

  - development 模式用于 `vue-cli-service serve`
  - production 模式用于 `vue-cli-service build` 和 `vue-cli-service test:e2e`
  - test 模式用于 `vue-cli-service test:unit`

- 在客户端侧代码中使用环境变量

  只有以 `VUE_APP_` 开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中。你可以在应用的代码中这样访问它们：`process.env.VUE_APP_*`

  除了 `VUE_AP_*` 变量之外，在你的应用代码中始终可用的还有两个特殊的变量：

  - `NODE_ENV` - 会是 "development"、"production" 或 "test" 中的一个。具体的值取决于应用运行的模式。
  - `BASE_URL` - 会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径。
