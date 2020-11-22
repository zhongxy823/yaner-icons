import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const iconName = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="iconName" {...props} ref={ref} />;

iconName.displayName = 'iconName';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(iconName);