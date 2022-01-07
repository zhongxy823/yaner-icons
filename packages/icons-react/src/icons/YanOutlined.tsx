import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const YanOutlined = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="YanOutlined" {...props} ref={ref} />;

YanOutlined.displayName = 'YanOutlined';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(YanOutlined);