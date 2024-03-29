import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const YiMulticolored = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="YiMulticolored" {...props} ref={ref} />;

YiMulticolored.displayName = 'YiMulticolored';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(YiMulticolored);