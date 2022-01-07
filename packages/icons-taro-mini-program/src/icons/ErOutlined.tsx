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
        backgroundImage: `url("data:image/svg+xml, %3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='${size}px' height='${size}px'%3E%3Cpath d='M243.598222 853.447111c9.557333 0 17.521778-3.982222 22.300445-11.946667 4.778667-15.928889 11.946667-43.804444 22.300444-83.626666 9.557333-38.229333 31.857778-125.041778 68.494222-259.640889 35.043556-133.802667 58.936889-215.04 70.883556-243.712 9.557333-28.672 15.132444-48.583111 15.928889-58.936889 0-4.778667-2.389333-9.557333-6.371556-14.336a24.007111 24.007111 0 0 0-18.318222-7.168c-11.150222 0-18.318222 4.778667-22.300444 12.743111-10.353778 26.282667-27.079111 78.051556-49.379556 156.103111A26431.032889 26431.032889 0 0 1 281.031111 564.337778l-45.397333 144.952889c-8.760889 28.672-15.928889 50.176-21.504 66.104889-6.371556 15.928889-9.557333 27.875556-9.557334 35.84 0 6.371556 3.982222 15.132444 13.539556 26.282666 8.760889 10.353778 17.521778 15.928889 25.486222 15.928889z m418.133334-11.946667a419.384889 419.384889 0 0 0 175.217777-37.432888c17.521778-6.371556 27.079111-14.336 27.079111-23.893334a31.857778 31.857778 0 0 0-6.371555-18.318222 45.169778 45.169778 0 0 0-29.468445-9.557333l-4.778666 1.592889a388.608 388.608 0 0 1-168.846222 39.025777c-33.450667 0-50.972444-45.397333-50.972445-134.599111 0-58.936889 3.982222-129.820444 11.946667-212.650666 6.371556-82.033778 14.336-149.731556 23.893333-203.889778 0.796444-7.964444 3.185778-19.114667 7.964445-32.654222a17.066667 17.066667 0 0 0 3.185777-9.557334c0-6.371556-6.371556-13.539556-18.318222-19.911111a58.709333 58.709333 0 0 0-21.504-4.778667c-14.336 0-21.504 6.371556-21.504 18.318223l-0.170667 1.991111c-1.024 11.264-7.224889 67.868444-17.351111 169.244444-14.336 119.466667-21.504 217.429333-21.504 293.888 0 63.715556 9.557333 109.112889 27.875556 138.581334 18.318222 29.468444 46.193778 44.600889 83.626667 44.600888z' fill='${getIconColor(color,0,'rgb(51,51,51)')}' /%3E%3C/svg%3E")`,
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
    />
  );
};

export default IconFont;