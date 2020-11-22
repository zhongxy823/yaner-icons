import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const ArrowDoubleLeftOutlined = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="ArrowDoubleLeftOutlined" {...props} ref={ref} />;

ArrowDoubleLeftOutlined.displayName = 'ArrowDoubleLeftOutlined';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(ArrowDoubleLeftOutlined);