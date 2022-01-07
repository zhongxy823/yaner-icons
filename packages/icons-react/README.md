# Yee Icons from React

### 引用组件

```shell
yarn add @yee/icons-react
```

### 基本用法

#### React & Vue，用法一致，以React举例

```tsx
import React from 'react'
import { SmilingOutlined } from '@yee/icons-react';

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
import { SmilingOutlined } from '@yee/icons-taro-h5'; 
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