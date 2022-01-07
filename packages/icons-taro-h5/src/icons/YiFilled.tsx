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
        d='M512 56.888889a455.111111 455.111111 0 1 1 0 910.222222A455.111111 455.111111 0 0 1 512 56.888889z m137.784889 90.112c-93.980444 0-197.518222 7.964444-310.613333 23.893333-3.185778-2.389333-6.371556-4.778667-11.150223-7.964444a80.327111 80.327111 0 0 0-32.654222-8.760889 49.095111 49.095111 0 0 0-21.504 3.982222c-6.371556 3.982222-8.760889 7.964444-8.760889 11.946667 0 4.778667 0 8.760889 1.592889 11.946666 1.592889 3.982222 2.389333 9.557333 2.389333 16.725334 0 111.502222 3.982222 197.518222 12.743112 258.048 1.592889 6.371556 4.778667 11.946667 9.557333 15.928889 6.371556 7.964444 16.725333 11.946667 29.468444 11.946666 7.964444 0 15.928889-3.185778 23.893334-9.557333 3.185778-3.185778 6.371556-6.371556 8.760889-11.150222l19.911111-5.575111c7.168-1.592889 15.132444-2.389333 24.689777-3.982223-15.928889 14.336-34.247111 33.450667-55.751111 57.344-36.636444 39.822222-66.104889 75.662222-88.405333 105.927112-22.300444 30.264889-35.84 46.990222-40.618667 50.176-7.964444 7.168-14.336 12.743111-19.911111 16.725333 15.132444 31.857778 31.061333 47.786667 47.786667 47.786667 6.371556 0 13.539556-3.185778 21.504-9.557334 7.964444-6.371556 20.707556-25.486222 38.229333-56.547555 9.557333-15.132444 19.911111-31.061333 31.061334-48.583111 4.778667 4.778667 9.557333 7.168 15.132444 7.168 2.389333 0 5.575111 0 9.557333-0.796445 4.778667-1.592889 17.521778-5.575111 39.025778-11.946667 9.557333-3.185778 23.893333-6.371556 43.008-10.353777-3.185778 3.982222-6.371556 8.760889-9.557333 14.336l-54.954667 78.848c-18.318222 27.079111-31.857778 45.397333-39.822222 54.954666l-19.911111 19.911111c-4.778667 4.778667-6.371556 7.964444-6.371556 11.150223 0 7.964444 4.778667 18.318222 15.132445 32.654222 10.353778 13.539556 19.911111 20.707556 29.468444 20.707555a29.582222 29.582222 0 0 0 25.486222-14.336c4.778667-6.371556 9.557333-15.132444 15.132445-25.486222 3.982222-11.150222 22.300444-43.804444 55.751111-98.759111 30.264889-54.158222 50.176-86.812444 59.733333-98.759111l8.760889-10.353778c26.282667-3.982222 54.954667-7.168 86.016-9.557333l-19.114667 36.636444a1910.613333 1910.613333 0 0 1-52.565333 97.962667c-17.521778 32.654222-29.468444 54.954667-37.432889 66.901333-7.964444 11.150222-14.336 19.911111-19.114666 25.486223-4.778667 5.575111-6.371556 10.353778-6.371556 13.539555 0 7.964444 4.778667 19.114667 15.928889 33.450667 11.150222 14.336 20.707556 21.504 30.264889 21.504 10.353778 0 19.114667-5.575111 26.282666-15.132445 3.982222-7.964444 8.760889-18.318222 14.336-31.061333 3.982222-12.743111 21.504-52.565333 51.768889-118.670222 29.468444-66.104889 48.583111-105.927111 56.547556-120.263111 2.389333-3.982222 4.778667-8.760889 7.964444-13.539556h23.096889c27.079111 0 40.618667 13.539556 40.618667 39.822222-0.796444 46.990222-10.353778 108.316444-27.875556 183.978667a100.693333 100.693333 0 0 1-13.539555 22.300444c-6.371556 3.185778-8.760889 5.575111-8.760889 7.964445 14.336 31.857778 27.875556 48.583111 39.025778 50.176 6.371556 0 15.928889-3.982222 29.468444-10.353778 12.743111-7.964444 20.707556-14.336 22.300445-17.521778a186.026667 186.026667 0 0 0 5.575111-25.486222c3.185778-11.150222 7.964444-41.415111 15.928889-91.591111 7.964444-49.379556 12.743111-92.387556 12.743111-130.616889 0-20.707556-4.778667-36.636444-13.539556-47.786667a145.976889 145.976889 0 0 0-36.636444-27.079111c-15.132444-6.371556-38.229333-10.353778-70.087111-10.353777-84.423111 0-168.846222 7.964444-254.862223 22.300444-20.707556 3.185778-38.229333 6.371556-54.158222 9.557333 17.521778-22.300444 36.636444-42.211556 55.751111-60.529777l15.587556-11.946667c16.497778-12.515556 27.249778-19.626667 32.199111-21.504a34.702222 34.702222 0 0 0 7.964444-12.743111l40.618667-3.185778c63.715556-3.982222 109.909333-6.371556 137.784889-6.371556 8.760889 0 18.318222 1.592889 27.875555 3.185778 10.353778 1.592889 19.911111 2.389333 28.672 2.389334 14.336 0 22.300444-7.964444 22.300445-23.096889 0-4.778667-3.982222-10.353778-11.946667-17.521778 3.185778-14.336 6.371556-39.025778 10.353778-74.069333 3.185778-34.247111 5.575111-71.68 5.575111-112.298667 0-12.743111-5.575111-23.096889-15.132444-32.654222-9.557333-9.557333-22.300444-16.725333-39.822223-23.096889a150.016 150.016 0 0 0-49.379555-8.760889z m-18.318222 171.235555c7.964444 0 21.504 0.796444 39.025777 1.592889-1.592889 7.964444-2.389333 15.928889-3.982222 24.689778a167.310222 167.310222 0 0 0-4.778666 30.264889v3.185778c-4.778667 1.592889-7.964444 1.592889-11.150223 1.592889-15.132444 1.592889-50.972444 4.778667-108.316444 8.760889-35.043556 3.185778-72.476444 6.371556-110.705778 9.557333-25.486222 3.185778-52.565333 6.371556-82.033778 10.353778a384.170667 384.170667 0 0 1-3.982222-41.415111c-0.796444-4.778667-0.796444-10.353778-0.796444-17.521778 7.168 0 19.114667-1.592889 35.043555-4.778667A2344.96 2344.96 0 0 1 515.982222 325.404444a1289.671111 1289.671111 0 0 1 115.484445-7.168z m2.389333-117.077333c28.672 0 43.008 5.575111 44.600889 16.725333 0 15.132444-0.796444 30.264889-1.592889 46.193778l-5.575111-0.796444a17.123556 17.123556 0 0 0-7.964445 1.592889c-1.592889 1.592889-7.964444 2.389333-17.521777 3.185777-77.255111 6.371556-142.563556 11.946667-195.925334 18.318223-50.289778 5.916444-78.620444 8.419556-86.243555 8.704l-20.48 0.056889a984.291556 984.291556 0 0 1-0.739556-36.408889l-0.056889-28.103111c11.150222-2.389333 19.114667-3.982222 23.096889-4.778667 87.608889-15.928889 177.607111-24.689778 268.401778-24.689778z'
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
