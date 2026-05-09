<template>
  <div id="app">
    <h1>Vue2 Component Lib Demo</h1>

    <section class="demo-section">
      <h2>StyledButton</h2>
      <StyledButton type="primary" text="Primary Button" @click="onBtnClick('primary')" />
      <StyledButton type="default" text="Default Button" @click="onBtnClick('default')" />
      <p class="demo-msg">{{ btnMsg }}</p>
    </section>

    <section class="demo-section">
      <h2>SimpleCounter</h2>
      <SimpleCounter :initial-value="10" :step="5" @change="onCountChange" />
      <p class="demo-msg">Counter value: {{ counterVal }}</p>
    </section>

    <section class="demo-section">
      <h2>formatDate</h2>
      <p>Date: {{ formattedDate }}</p>
    </section>
  </div>
</template>

<script>
// 按需导入工具函数（与全量注册不冲突）
import { formatDate } from 'vue2-component-lib'

export default {
  name: 'App',
  data() {
    return {
      btnMsg: '',
      counterVal: 10,
      formattedDate: formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss')
    }
  },
  methods: {
    onBtnClick(type) {
      this.btnMsg = `Clicked: ${type} button`
    },
    onCountChange(val) {
      this.counterVal = val
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
#app {
  max-width: 640px;
  margin: 40px auto;
  padding: 0 20px;
}
h1 {
  color: #333;
  border-bottom: 2px solid #1890ff;
  padding-bottom: 8px;
}
h2 {
  color: #555;
  margin-top: 0;
}
.demo-section {
  margin: 24px 0;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 6px;
}
.demo-msg {
  color: #888;
  font-size: 13px;
  margin-top: 8px;
}
</style>
