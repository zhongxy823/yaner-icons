import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const ErFilled = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="ErFilled" {...props} ref={ref} />;

ErFilled.displayName = 'ErFilled';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(ErFilled);