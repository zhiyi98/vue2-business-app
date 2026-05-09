# vue2-business-app

Vue2 业务应用 Demo，演示通过 Git 仓库依赖引入 `vue2-component-lib`。

## 快速开始

```bash
npm install
npm run dev
```

浏览器打开 `http://localhost:5173` 查看效果。

## 依赖说明

`package.json` 中通过 Git 地址引用组件库：

```json
{
  "dependencies": {
    "vue2-component-lib": "git+https://github.com/zhiyi98/vue2-component-lib.git#v1.0.0"
  }
}
```

`#v1.0.0` 锁定 Tag 版本，去掉则跟随 main 分支最新提交。

## 使用方式

### 全量注册（main.js）

```js
import Vue from 'vue'
import 'vue2-component-lib/dist/style.css'
import ComponentLib from 'vue2-component-lib'

Vue.use(ComponentLib)
```

### 按需导入工具函数

```js
import { formatDate } from 'vue2-component-lib'
```

### 页面中使用

```html
<StyledButton type="primary" text="Primary" @click="handler" />
<SimpleCounter :initial-value="10" :step="5" @change="handleChange" />
<p>{{ formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss') }}</p>
```

## 构建

```bash
npm run build
```

产物输出到 `dist/`。

## 更新库依赖

当 `vue2-component-lib` 发布新版本后：

```bash
# 更新到最新
npm update vue2-component-lib

# 或锁定新 Tag
npm install vue2-component-lib@git+https://github.com/zhiyi98/vue2-component-lib.git#v1.1.0
```
