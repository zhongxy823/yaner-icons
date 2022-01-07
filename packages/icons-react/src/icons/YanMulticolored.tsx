import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const YanMulticolored = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="YanMulticolored" {...props} ref={ref} />;

YanMulticolored.displayName = 'YanMulticolored';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(YanMulticolored);