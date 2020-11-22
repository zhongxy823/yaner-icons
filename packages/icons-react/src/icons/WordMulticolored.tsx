import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const WordMulticolored = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="WordMulticolored" {...props} ref={ref} />;

WordMulticolored.displayName = 'WordMulticolored';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(WordMulticolored);