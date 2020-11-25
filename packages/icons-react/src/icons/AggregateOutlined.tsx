import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const AggregateOutlined = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="AggregateOutlined" {...props} ref={ref} />;

AggregateOutlined.displayName = 'AggregateOutlined';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(AggregateOutlined);