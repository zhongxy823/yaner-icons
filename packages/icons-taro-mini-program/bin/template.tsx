import Taro from '@tarojs/taro';
import React from 'react';
import { View } from '@tarojs/components'

import { getIconColor } from '../utils';

export interface IconFontProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  color?: string;
}

const IconFont: React.FC<IconFontProps> = props => {
  const { size: _size = 28, color, style, className } = props;
  const size =
    (parseFloat(Taro.pxTransform(_size)) / 750) *
    Taro.getSystemInfoSync().windowWidth;

  return (
    <View
      className={className}
      style={{
        backgroundImage: `iconBackgroundImage`,
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
    />
  );
};

export default IconFont;