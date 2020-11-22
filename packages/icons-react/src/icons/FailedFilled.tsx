import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const FailedFilled = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="FailedFilled" {...props} ref={ref} />;

FailedFilled.displayName = 'FailedFilled';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(FailedFilled);