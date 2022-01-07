import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const XiaoOutlined = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="XiaoOutlined" {...props} ref={ref} />;

XiaoOutlined.displayName = 'XiaoOutlined';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(XiaoOutlined);