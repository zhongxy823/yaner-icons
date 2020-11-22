import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const SuccessFilled = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="SuccessFilled" {...props} ref={ref} />;

SuccessFilled.displayName = 'SuccessFilled';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(SuccessFilled);