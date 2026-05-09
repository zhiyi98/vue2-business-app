import Vue from 'vue'
import App from './App.vue'

// 导入库的样式
import 'vue2-component-lib/dist/style.css'

// 导入库并全量注册组件（也可以单独按需导入）
import ComponentLib from 'vue2-component-lib'

Vue.use(ComponentLib)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
