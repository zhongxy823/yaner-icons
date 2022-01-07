# yaner Icons

### 引用组件

```shell
yarn add @yaner/icons-react
yarn add @yaner/icons-vue
yarn add @yaner/icons-taro-mini-program
yarn add @yaner/icons-taro-h5
```

### 基本用法

#### React & Vue，用法一致，以React举例

```tsx
import React from 'react'
import { SmilingOutlined } from '@yaner/icons-react';

const IPage: React.SF = () => {
  return (
  	<div>
    	<SmilingOutlined />
    </div>
  )
}

export default IPage
```

#### Taro，h5和miniProgram用法一致，以h5举例

```tsx
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { SmilingOutlined } from '@yaner/icons-taro-h5'; 
export default class IPage extends Component {

  componentWillMount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <SmilingOutlined size={16} color="#000000" />
      </View>
    )
  }
}
```