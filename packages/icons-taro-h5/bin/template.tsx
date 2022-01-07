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
  return (#iconContent#  );
};

IconFont.defaultProps = {
  size: 28,
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
