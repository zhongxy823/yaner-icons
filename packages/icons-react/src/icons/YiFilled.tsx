import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const YiFilled = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="YiFilled" {...props} ref={ref} />;

YiFilled.displayName = 'YiFilled';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(YiFilled);