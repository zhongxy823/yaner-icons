import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const TxTMulticolored = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="TxTMulticolored" {...props} ref={ref} />;

TxTMulticolored.displayName = 'TxTMulticolored';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(TxTMulticolored);