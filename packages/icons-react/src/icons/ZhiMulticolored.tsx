import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const ZhiMulticolored = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="ZhiMulticolored" {...props} ref={ref} />;

ZhiMulticolored.displayName = 'ZhiMulticolored';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(ZhiMulticolored);