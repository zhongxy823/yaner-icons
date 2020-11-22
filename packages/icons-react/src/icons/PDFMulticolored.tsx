import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const PDFMulticolored = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="PDFMulticolored" {...props} ref={ref} />;

PDFMulticolored.displayName = 'PDFMulticolored';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(PDFMulticolored);