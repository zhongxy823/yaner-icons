/* eslint-disable */

import React from 'react';
import { getIconColor } from '../utils';

export interface IconFontProps {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  color?: string;
}

let IconFont: React.FC<IconFontProps> = ({ size, color, style, ...rest }) => {
  return (
    <svg viewBox="0 0 1024 1024" width={size} height={size} style={style} {...rest}>
      <path
        d='M512 56.888889a455.111111 455.111111 0 0 1 323.697778 774.997333c-3.015111-10.296889-11.946667-24.746667-25.827556-43.747555-19.911111-23.893333-39.025778-41.415111-56.547555-53.361778-15.928889-11.946667-29.468444-18.318222-40.618667-18.318222a31.857778 31.857778 0 0 0-26.282667 11.946666 41.756444 41.756444 0 0 0-8.760889 26.282667c0 4.778667 0.796444 8.760889 3.185778 11.946667 3.185778 0 7.168 2.389333 13.539556 5.575111 6.371556 2.389333 15.132444 8.760889 27.875555 19.114666 12.743111 9.557333 24.689778 23.096889 37.432889 41.415112 12.743111 17.521778 20.707556 30.264889 23.893334 39.822222a12.060444 12.060444 0 0 0 1.137777 3.754666A452.835556 452.835556 0 0 1 512 967.111111a453.063111 453.063111 0 0 1-269.482667-88.291555l5.063111 0.113777c3.982222 0 7.964444-0.796444 12.743112-0.796444-1.592889-6.371556-1.592889-11.946667-1.592889-16.725333 0-7.964444 2.389333-16.725333 5.575111-26.282667 7.964444-22.300444 18.318222-42.211556 31.857778-58.936889a34.019556 34.019556 0 0 1 11.150222-10.353778 15.701333 15.701333 0 0 0 4.778666-11.150222c0-1.592889-0.796444-4.778667-1.592888-8.760889a38.570667 38.570667 0 0 0-12.743112-18.318222 25.827556 25.827556 0 0 0-19.114666-7.168 35.783111 35.783111 0 0 0-15.132445 3.185778c-6.371556 2.389333-12.743111 7.964444-19.911111 16.725333-13.539556 16.725333-27.079111 39.025778-41.415111 66.104889-6.257778 13.994667-8.647111 24.234667-8.760889 30.663111A455.111111 455.111111 0 0 1 512 56.888889zM406.869333 737.166222c-9.557333 1.592889-15.928889 3.982222-19.911111 10.353778-4.778667 4.778667-7.168 11.946667-7.168 22.300444 0 9.557333 3.185778 22.300444 11.150222 39.025778 6.371556 16.725333 15.928889 31.857778 27.079112 45.397334 10.353778 14.336 19.114667 22.300444 26.282666 22.300444 10.353778 0 19.911111-4.778667 28.672-13.539556 8.760889-7.964444 13.539556-14.336 13.539556-19.114666a17.521778 17.521778 0 0 0-6.371556-14.336l-10.353778-10.353778a101.262222 101.262222 0 0 1-10.353777-17.521778 80.213333 80.213333 0 0 1-8.760889-22.300444 119.239111 119.239111 0 0 1-2.389334-14.336 28.672 28.672 0 0 0-13.539555-19.911111 47.672889 47.672889 0 0 0-27.875556-7.964445z m149.731556-2.389333c-9.557333 1.592889-16.725333 4.778667-20.707556 10.353778-4.778667 4.778667-7.168 12.743111-7.168 22.300444s3.982222 22.300444 13.539556 39.025778c8.760889 16.725333 19.911111 31.857778 32.654222 46.193778 12.743111 14.336 23.893333 21.504 32.654222 21.504 10.353778 0 19.911111-4.778667 28.672-13.539556 8.760889-7.964444 13.539556-14.336 13.539556-19.114667a17.521778 17.521778 0 0 0-6.371556-14.336l-27.875555-27.875555c-7.168-7.964444-11.946667-15.928889-14.336-22.300445a47.672889 47.672889 0 0 1-3.982222-14.336 30.264889 30.264889 0 0 0-12.743112-19.911111 59.107556 59.107556 0 0 0-27.875555-7.964444z m-234.951111-352.824889c-15.928889 0-23.893333 7.168-23.893334 19.911111L296.96 470.357333c-17.521778 0-31.061333-0.796444-40.618667-0.796444-8.760889 0-18.318222 0.796444-27.875555 0.796444a359.025778 359.025778 0 0 0-31.857778 3.185778c-7.964444 2.389333-11.150222 7.168-11.150222 14.336 0 11.150222 2.389333 21.504 8.760889 32.654222 5.575111 11.150222 12.743111 15.928889 20.707555 15.928889 0 0 1.592889 0 3.982222-1.592889 7.168-1.592889 14.336-3.185778 22.300445-3.982222 7.964444 0 13.539556-0.796444 18.318222-0.796444h27.079111l9.557334 0.796444-0.796445 88.405333-9.557333 2.389334c-11.150222 3.185778-23.893333 7.168-37.432889 11.946666l-35.84 11.946667a117.873778 117.873778 0 0 1-24.689778 5.575111l-14.336 2.389334c-3.185778 12.743111-3.982222 23.893333-3.982222 31.857777 0 9.557333 2.389333 17.521778 7.964444 22.300445a20.650667 20.650667 0 0 0 18.318223 8.760889 41.813333 41.813333 0 0 0 18.318222-5.575111l43.008-16.725334c15.928889-5.575111 28.672-9.557333 39.025778-12.743111 3.185778 15.928889 19.114667 23.893333 47.786666 23.893333a38.570667 38.570667 0 0 0 20.707556-5.575111 53.475556 53.475556 0 0 1-6.371556-23.893333l4.778667-241.322667c0-7.964444 1.592889-13.539556 5.575111-18.318222a39.253333 39.253333 0 0 0 3.982222-14.336c0-4.778667-5.575111-9.557333-15.928889-13.539555a116.792889 116.792889 0 0 0-35.043555-6.371556z m215.836444 50.176c-27.079111 0-56.547556 3.982222-87.608889 11.946667a119.580444 119.580444 0 0 0-29.468444-3.982223c-14.336 0-21.504 7.168-21.504 20.707556v6.371556l0.796444 10.353777 6.371556 163.271111v11.150223c0 6.371556 3.185778 13.539556 10.353778 21.504 7.964444 7.964444 19.911111 11.150222 36.636444 11.150222a19.512889 19.512889 0 0 0 14.336-8.760889c15.132444-1.592889 29.468444-3.185778 42.211556-4.778667 16.725333-0.796444 29.468444-1.592889 37.432889-1.592889 4.778667 0 11.946667 0.796444 22.300444 1.592889 11.946667 1.592889 19.911111 1.592889 23.096889 1.592889 22.300444 0 33.450667-9.557333 33.450667-27.875555 0-3.982222-3.185778-8.760889-7.964445-14.336 1.592889-11.150222 3.185778-27.079111 5.575111-46.193778 2.389333-27.079111 3.982222-56.547556 3.982222-88.405333a48.924444 48.924444 0 0 0-12.743111-31.857778 110.933333 110.933333 0 0 0-34.247111-22.300445 105.130667 105.130667 0 0 0-43.008-9.557333z m148.935111-49.379556c-14.336 0-22.300444 4.778667-22.300444 13.539556v18.318222c-3.185778 79.644444-3.982222 139.377778-3.982222 179.2 0 28.672 7.168 50.972444 23.096889 66.104889 15.928889 15.928889 38.229333 23.893333 66.901333 23.893333 28.672 0 54.954667-3.185778 78.848-9.557333 13.539556-4.778667 20.707556-16.725333 20.707555-35.043555a32.312889 32.312889 0 0 0-3.982222-13.539556c-6.371556-8.760889-17.521778-13.539556-31.857778-13.539556a26.908444 26.908444 0 0 0-9.557333 4.778667c-1.592889 0.796444-7.964444 2.389333-19.911111 3.982222a307.939556 307.939556 0 0 1-38.229333 2.389334c-12.743111 0-19.911111-9.557333-19.911111-29.468445 0-14.336 0-30.264889 0.796444-46.990222 4.778667-3.185778 8.760889-6.371556 13.539556-8.760889a446.464 446.464 0 0 1 89.998222-44.600889c11.150222-3.185778 16.725333-4.778667 17.521778-5.575111 3.982222-3.185778 6.371556-12.743111 6.371555-30.264889-4.778667-7.964444-15.132444-11.946667-29.468444-12.743111-4.778667 0-16.725333 3.185778-34.247111 9.557333-15.928889 4.778667-35.84 12.743111-58.936889 23.893334 0.796444-13.539556 1.592889-23.096889 3.185777-29.468445 0.796444-11.150222 1.592889-19.114667 3.185778-23.893333 1.592889-3.982222 3.185778-7.168 3.185778-10.353778 0-9.557333-7.168-17.521778-19.911111-23.893333-13.539556-4.778667-25.486222-7.964444-35.043556-7.964445zM523.946667 486.286222c23.893333 0 36.636444 5.575111 37.432889 15.132445 0 31.857778-2.389333 63.715556-7.168 96.369777l-2.389334 11.946667-61.326222 4.778667-19.911111 1.592889-1.592889-74.865778c-0.796444-15.928889-0.796444-29.468444-0.796444-41.415111 17.521778-8.760889 35.84-13.539556 55.751111-13.539556z m93.184-356.010666c-15.132444 0-25.486222 7.964444-31.061334 23.893333-4.778667 12.743111-7.168 27.875556-8.760889 43.804444l-20.707555 1.592889c-39.822222 3.185778-81.237333 7.168-124.245333 10.353778l1.592888-11.946667c1.592889-8.760889 4.778667-16.725333 7.964445-24.689777a34.133333 34.133333 0 0 0 3.185778-11.150223c0-7.168-7.168-14.336-20.707556-21.504-14.336-5.575111-27.079111-8.760889-37.432889-8.760889-12.743111 1.592889-19.114667 6.371556-19.114666 14.336 0 5.575111-2.389333 23.893333-5.575112 55.751112l-1.592888 14.336c-54.158222 4.778667-112.298667 11.150222-176.014223 19.114666-5.575111 0.796444-7.964444 3.982222-7.964444 8.760889 0 9.557333 3.982222 21.504 13.539555 35.84 7.964444 14.336 17.521778 21.504 28.672 21.504 8.760889 0 18.318222-0.796444 28.672-3.982222 9.557333-2.389333 22.300444-5.575111 36.636445-8.760889 21.504-3.185778 45.397333-7.168 72.476444-10.353778-0.796444 5.575111-0.796444 11.150222-0.796444 15.928889 0 35.043556 7.964444 60.529778 23.893333 76.458667 15.132444 17.521778 40.618667 25.486222 76.458667 25.486222 39.025778 0 75.662222-2.389333 109.112889-7.168 33.450667-3.982222 58.140444-8.760889 74.069333-15.132444 14.336-7.168 22.300444-17.521778 22.300445-31.857778a31.857778 31.857778 0 0 0-6.371556-18.318222c-2.389333-1.592889-4.778667-3.982222-7.964444-5.575112l-3.185778-13.539555a187.904 187.904 0 0 1-1.592889-46.990222 3327.943111 3327.943111 0 0 1 108.316444-2.389334c10.353778 0 21.504 1.592889 34.247111 3.185778 12.743111 3.185778 24.689778 3.982222 35.84 3.982222 17.521778-0.796444 27.079111-10.353778 27.079112-29.468444 0-7.964444-10.353778-19.114667-31.061334-33.450667-20.707556-11.150222-35.043556-17.521778-43.008-17.521778-24.689778 3.982222-41.415111 6.371556-49.379555 7.168l-71.68 4.778667a38.798222 38.798222 0 0 1 3.185777-8.760889l4.778667-11.150222a18.318222 18.318222 0 0 0 2.389333-7.168 29.582222 29.582222 0 0 0-14.336-25.486222c-11.150222-7.168-21.504-11.150222-31.857777-11.150222z m-41.415111 130.616888c0 9.557333 0 19.114667 1.592888 28.672 1.592889 12.743111 3.185778 23.893333 6.371556 33.450667-46.193778 11.150222-86.812444 16.725333-121.856 16.725333-16.725333 0-27.079111-3.185778-31.061333-9.557333-3.982222-4.778667-5.575111-12.743111-5.575111-23.893333 0-10.353778 0-22.300444 1.592888-35.043556a3057.493333 3057.493333 0 0 1 107.52-7.964444l41.415112-2.389334z'
        fill={getIconColor(color,0,'rgb(51,51,51)')}
      />
    </svg>
  );
};

IconFont.defaultProps = {
  size: 28,
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;