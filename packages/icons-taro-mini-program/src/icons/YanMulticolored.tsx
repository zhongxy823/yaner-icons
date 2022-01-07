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
        backgroundImage: `url("data:image/svg+xml, %3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='${size}px' height='${size}px'%3E%3Cpath d='M199.520499-6.919519m220.796183 55.050672l386.39332 96.338675q220.796183 55.050671 165.745512 275.846854l-96.338675 386.39332q-55.050671 220.796183-275.846854 165.745512l-386.393321-96.338675q-220.796183-55.050671-165.745511-275.846854l96.338675-386.393321q55.050671-220.796183 275.846854-165.745511Z' fill='${getIconColor(color,0,'rgb(246,187,68)')}' fill-opacity='.3' /%3E%3Cpath d='M113.777778 113.777778m227.555555 0l341.333334 0q227.555556 0 227.555555 227.555555l0 341.333334q0 227.555556-227.555555 227.555555l-341.333334 0q-227.555556 0-227.555555-227.555555l0-341.333334q0-227.555556 227.555555-227.555555Z' fill='${getIconColor(color,0,'rgb(246,187,68)')}' /%3E%3Cpath d='M464.213333 416.881778c33.450667 0 64.853333-2.048 93.525334-6.144 28.672-3.413333 49.834667-7.509333 63.488-12.970667 12.288-6.144 19.114667-15.018667 19.114666-27.306667a27.306667 27.306667 0 0 0-5.461333-15.701333c-2.048-1.365333-4.096-3.413333-6.826667-4.778667l-2.730666-11.605333a160.995556 160.995556 0 0 1-1.365334-40.277333 2852.522667 2852.522667 0 0 1 92.842667-2.048c8.874667 0 18.432 1.365333 29.354667 2.730666 10.922667 2.730667 21.162667 3.413333 30.72 3.413334 15.018667-0.682667 23.210667-8.874667 23.210666-25.258667 0-6.826667-8.874667-16.384-26.624-28.672-17.749333-9.557333-30.037333-15.018667-36.864-15.018667-21.162667 3.413333-35.498667 5.461333-42.325333 6.144l-61.44 4.096a33.28 33.28 0 0 1 2.730667-7.509333l4.096-9.557333a15.701333 15.701333 0 0 0 2.048-6.144 25.372444 25.372444 0 0 0-12.288-21.845334c-9.557333-6.144-18.432-9.557333-27.306667-9.557333-12.970667 0-21.845333 6.826667-26.624 20.48a152.462222 152.462222 0 0 0-7.509333 37.546667l-17.749334 1.365333c-34.133333 2.730667-69.632 6.144-106.496 8.874667l1.365334-10.24c1.365333-7.509333 4.096-14.336 6.826666-21.162667 1.365333-3.413333 2.730667-6.826667 2.730667-9.557333 0-6.144-6.144-12.288-17.749333-18.432a93.184 93.184 0 0 0-32.085334-7.509334c-10.922667 1.365333-16.384 5.461333-16.384 12.288 0 4.778667-2.048 20.48-4.778666 47.786667l-1.365334 12.288c-46.421333 4.096-96.256 9.557333-150.869333 16.384-4.778667 0.682667-6.826667 3.413333-6.826667 7.509333 0 8.192 3.413333 18.432 11.605334 30.72 6.826667 12.288 15.018667 18.432 24.576 18.432 7.509333 0 15.701333-0.682667 24.576-3.413333 8.192-2.048 19.114667-4.778667 31.402666-7.509333 18.432-2.730667 38.912-6.144 62.122667-8.874667-0.682667 4.778667-0.682667 9.557333-0.682667 13.653333 0 30.037333 6.826667 51.882667 20.48 65.536 12.970667 15.018667 34.816 21.845333 65.536 21.845334z m4.778667-48.469334c-14.336 0-23.210667-2.730667-26.624-8.192-3.413333-4.096-4.778667-10.922667-4.778667-20.48 0-8.874667 0-19.114667 1.365334-30.037333a2620.700444 2620.700444 0 0 1 92.16-6.826667l35.498666-2.048c0 8.192 0 16.384 1.365334 24.576 1.365333 10.922667 2.730667 20.48 5.461333 28.672-39.594667 9.557333-74.410667 14.336-104.448 14.336z m-228.010667 322.901334a35.84 35.84 0 0 0 15.701334-4.778667l36.864-14.336c13.653333-4.778667 24.576-8.192 33.450666-10.922667 2.730667 13.653333 16.384 20.48 40.96 20.48a33.052444 33.052444 0 0 0 17.749334-4.778666 45.852444 45.852444 0 0 1-5.461334-20.48l4.096-206.848c0-6.826667 1.365333-11.605333 4.778667-15.701334a33.621333 33.621333 0 0 0 3.413333-12.288c0-4.096-4.778667-8.192-13.653333-11.605333a100.124444 100.124444 0 0 0-30.037333-5.461333c-13.653333 0-20.48 6.144-20.48 17.066666L327.68 480.369778c-15.018667 0-26.624-0.682667-34.816-0.682667-7.509333 0-15.701333 0.682667-23.893333 0.682667a307.768889 307.768889 0 0 0-27.306667 2.730666c-6.826667 2.048-9.557333 6.144-9.557333 12.288 0 9.557333 2.048 18.432 7.509333 27.989334 4.778667 9.557333 10.922667 13.653333 17.749333 13.653333 0 0 1.365333 0 3.413334-1.365333a158.72 158.72 0 0 1 19.114666-3.413334c6.826667 0 11.605333-0.682667 15.701334-0.682666h23.210666l8.192 0.682666-0.682666 75.776-8.192 2.048c-9.557333 2.730667-20.48 6.144-32.085334 10.24l-30.72 10.24a101.034667 101.034667 0 0 1-21.162666 4.778667l-12.288 2.048c-2.730667 10.922667-3.413333 20.48-3.413334 27.306667 0 8.192 2.048 15.018667 6.826667 19.114666a17.635556 17.635556 0 0 0 15.701333 7.509334z m475.136-27.989334c24.576 0 47.104-2.730667 67.584-8.192 11.605333-4.096 17.749333-14.336 17.749334-30.037333a27.704889 27.704889 0 0 0-3.413334-11.605333c-5.461333-7.509333-15.018667-11.605333-27.306666-11.605334a23.096889 23.096889 0 0 0-8.192 4.096c-1.365333 0.682667-6.826667 2.048-17.066667 3.413334a263.964444 263.964444 0 0 1-32.768 2.048c-10.922667 0-17.066667-8.192-17.066667-25.258667 0-12.288 0-25.941333 0.682667-40.277333 4.096-2.730667 7.509333-5.461333 11.605333-7.509334a382.691556 382.691556 0 0 1 77.141334-38.229333c9.557333-2.730667 14.336-4.096 15.018666-4.778667 3.413333-2.730667 5.461333-10.922667 5.461334-25.941333-4.096-6.826667-12.970667-10.24-25.258667-10.922667-4.096 0-14.336 2.730667-29.354667 8.192-13.653333 4.096-30.72 10.922667-50.517333 20.48a155.875556 155.875556 0 0 1 2.730667-25.258666c0.682667-9.557333 1.365333-16.384 2.730666-20.48 1.365333-3.413333 2.730667-6.144 2.730667-8.874667 0-8.192-6.144-15.018667-17.066667-20.48-11.605333-4.096-21.845333-6.826667-30.037333-6.826667-12.288 0-19.114667 4.096-19.114667 11.605334v15.701333c-2.730667 68.266667-3.413333 119.466667-3.413333 153.6 0 24.576 6.144 43.690667 19.797333 56.661333 13.653333 13.653333 32.768 20.48 57.344 20.48z m-254.634666 0.682667a16.725333 16.725333 0 0 0 12.288-7.509333c12.970667-1.365333 25.258667-2.730667 36.181333-4.096 14.336-0.682667 25.258667-1.365333 32.085333-1.365334 4.096 0 10.24 0.682667 19.114667 1.365334 10.24 1.365333 17.066667 1.365333 19.797333 1.365333 19.114667 0 28.672-8.192 28.672-23.893333 0-3.413333-2.730667-7.509333-6.826666-12.288 1.365333-9.557333 2.730667-23.210667 4.778666-39.594667a859.022222 859.022222 0 0 0 3.413334-75.776 41.927111 41.927111 0 0 0-10.922667-27.306667 95.004444 95.004444 0 0 0-29.354667-19.114666 90.112 90.112 0 0 0-36.864-8.192c-23.210667 0-48.469333 3.413333-75.093333 10.24a102.456889 102.456889 0 0 0-25.258667-3.413334c-12.288 0-18.432 6.144-18.432 17.749334v5.461333l0.682667 8.874667 5.461333 139.946666v9.557334c0 5.461333 2.730667 11.605333 8.874667 18.432 6.826667 6.826667 17.066667 9.557333 31.402667 9.557333z m15.018666-58.709333l-1.365333-64.170667c-0.682667-13.653333-0.682667-25.258667-0.682667-35.498667 15.018667-7.509333 30.72-11.605333 47.786667-11.605333 20.48 0 31.402667 4.778667 32.085333 12.970667 0 27.306667-2.048 54.613333-6.144 82.602666l-2.048 10.24-52.565333 4.096-17.066667 1.365334z m274.432 225.962666c14.336-1.365333 24.576-6.144 30.72-13.653333 5.461333-7.509333 8.874667-14.336 8.874667-21.162667 0-8.874667-8.192-23.210667-23.210667-43.690666-17.066667-20.48-33.450667-35.498667-48.469333-45.738667-13.653333-10.24-25.258667-15.701333-34.816-15.701333a27.306667 27.306667 0 0 0-22.528 10.24 35.84 35.84 0 0 0-7.509333 22.528 16.497778 16.497778 0 0 0 2.730666 10.24c1.365333 0 2.901333 0.512 4.778667 1.365333l6.826667 3.413333c5.461333 2.048 12.970667 7.509333 23.893333 16.384 10.922667 8.192 21.162667 19.797333 32.085333 35.498667 10.922667 15.018667 17.749333 25.941333 20.48 34.133333 0.682667 4.096 2.730667 6.144 6.144 6.144zM285.354667 830.577778c3.413333 0 6.826667-0.682667 10.922666-0.682667-1.365333-5.461333-1.365333-10.24-1.365333-14.336 0-6.826667 2.048-14.336 4.778667-22.528 6.826667-19.114667 15.701333-36.181333 27.306666-50.517333a29.127111 29.127111 0 0 1 9.557334-8.874667 13.482667 13.482667 0 0 0 4.096-9.557333c0-1.365333-0.682667-4.096-1.365334-7.509334a33.052444 33.052444 0 0 0-10.922666-15.701333 22.186667 22.186667 0 0 0-16.384-6.144 30.663111 30.663111 0 0 0-12.970667 2.730667c-5.461333 2.048-10.922667 6.826667-17.066667 14.336-11.605333 14.336-23.210667 33.450667-35.498666 56.661333-5.461333 12.288-7.509333 21.162667-7.509334 26.624 0 9.557333 2.730667 17.066667 9.557334 23.893333 6.826667 7.509333 19.114667 11.605333 36.864 11.605334z m308.565333-4.096c8.874667 0 17.066667-4.096 24.576-11.605334 7.509333-6.826667 11.605333-12.288 11.605333-16.384a15.018667 15.018667 0 0 0-5.461333-12.288l-23.893333-23.893333c-6.144-6.826667-10.24-13.653333-12.288-19.114667a40.903111 40.903111 0 0 1-3.413334-12.288 25.941333 25.941333 0 0 0-10.922666-17.066666 50.631111 50.631111 0 0 0-23.893334-6.826667c-8.192 1.365333-14.336 4.096-17.749333 8.874667-4.096 4.096-6.144 10.922667-6.144 19.114666 0 8.192 3.413333 19.114667 11.605333 33.450667 7.509333 14.336 17.066667 27.306667 27.989334 39.594667 10.922667 12.288 20.48 18.432 27.989333 18.432z m-139.946667 2.048c8.874667 0 17.066667-4.096 24.576-11.605334 7.509333-6.826667 11.605333-12.288 11.605334-16.384a15.018667 15.018667 0 0 0-5.461334-12.288l-8.874666-8.874666a86.755556 86.755556 0 0 1-8.874667-15.018667 68.778667 68.778667 0 0 1-7.509333-19.114667 102.172444 102.172444 0 0 1-2.048-12.288 24.576 24.576 0 0 0-11.605334-17.066666 40.846222 40.846222 0 0 0-23.893333-6.826667c-8.192 1.365333-13.653333 3.413333-17.066667 8.874667-4.096 4.096-6.144 10.24-6.144 19.114666 0 8.192 2.730667 19.114667 9.557334 33.450667 5.461333 14.336 13.653333 27.306667 23.210666 38.912 8.874667 12.288 16.384 19.114667 22.528 19.114667z' fill='${getIconColor(color,0,'rgb(255,255,255)')}' /%3E%3C/svg%3E")`,
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
    />
  );
};

export default IconFont;