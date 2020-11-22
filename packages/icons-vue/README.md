# Yee Icons from Vue

### 引用组件

```shell
yarn add @yee/icons-vue
```

### 基本用法

```vue
<template>
  <div class="page-view">
    <RotateLeftOutlined class="className" />
  </div>
</template>

<script>

import { RotateLeftOutlined } from '@yee/icons-vue'

export default {
  name: 'Page',
  components: {
    RotateLeftOutlined
  }
}
</script>
```
