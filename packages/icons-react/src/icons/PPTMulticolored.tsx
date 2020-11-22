import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const PPTMulticolored = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="PPTMulticolored" {...props} ref={ref} />;

PPTMulticolored.displayName = 'PPTMulticolored';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(PPTMulticolored);