import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const ExcelMulticolored = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="ExcelMulticolored" {...props} ref={ref} />;

ExcelMulticolored.displayName = 'ExcelMulticolored';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(ExcelMulticolored);