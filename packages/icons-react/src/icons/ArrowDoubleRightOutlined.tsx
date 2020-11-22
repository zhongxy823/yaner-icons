import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const ArrowDoubleRightOutlined = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="ArrowDoubleRightOutlined" {...props} ref={ref} />;

ArrowDoubleRightOutlined.displayName = 'ArrowDoubleRightOutlined';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(ArrowDoubleRightOutlined);