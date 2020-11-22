import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const MinusOutlined = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="MinusOutlined" {...props} ref={ref} />;

MinusOutlined.displayName = 'MinusOutlined';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(MinusOutlined);