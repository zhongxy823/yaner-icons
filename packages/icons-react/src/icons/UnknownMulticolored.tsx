import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const UnknownMulticolored = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="UnknownMulticolored" {...props} ref={ref} />;

UnknownMulticolored.displayName = 'UnknownMulticolored';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(UnknownMulticolored);