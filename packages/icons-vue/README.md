# yaner Icons from Vue

### 引用组件

```shell
yarn add @yaner/icons-vue
```

### 基本用法

```vue
<template>
  <div class="page-view">
    <RotateLeftOutlined class="className" />
  </div>
</template>

<script>

import { RotateLeftOutlined } from '@yaner/icons-vue'

export default {
  name: 'Page',
  components: {
    RotateLeftOutlined
  }
}
</script>
```
