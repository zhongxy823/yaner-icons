import { default as createFromIconfontCN } from '../components/IconFont';

const IconFont = createFromIconfontCN()

export default {
  name: 'ArrowDoubleRightOutlined',
  displayName: 'ArrowDoubleRightOutlined',
  functional: true,
  render: (h, { data, children }) =>
    h(
      IconFont,
      { ...data, props: { ...data.props, type: 'ArrowDoubleRightOutlined' } },
      children
    ),
};