import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const ErMulticolored = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="ErMulticolored" {...props} ref={ref} />;

ErMulticolored.displayName = 'ErMulticolored';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(ErMulticolored);