import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const XiaoMulticolored = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="XiaoMulticolored" {...props} ref={ref} />;

XiaoMulticolored.displayName = 'XiaoMulticolored';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(XiaoMulticolored);