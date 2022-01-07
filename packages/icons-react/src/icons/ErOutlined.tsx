import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const ErOutlined = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="ErOutlined" {...props} ref={ref} />;

ErOutlined.displayName = 'ErOutlined';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(ErOutlined);