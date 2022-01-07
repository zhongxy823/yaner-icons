import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const XiaoFilled = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="XiaoFilled" {...props} ref={ref} />;

XiaoFilled.displayName = 'XiaoFilled';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(XiaoFilled);