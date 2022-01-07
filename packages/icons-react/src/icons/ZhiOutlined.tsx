import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const ZhiOutlined = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="ZhiOutlined" {...props} ref={ref} />;

ZhiOutlined.displayName = 'ZhiOutlined';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(ZhiOutlined);