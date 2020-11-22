import * as React from 'react'
import { default as createFromIconfontCN } from '../components/IconFont';
import { IconBaseProps } from '../components/Icon';

const IconFont = createFromIconfontCN()

const AddOutlined = (
  props: IconBaseProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <IconFont type="AddOutlined" {...props} ref={ref} />;

AddOutlined.displayName = 'AddOutlined';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(AddOutlined);