import { default as createFromIconfontCN } from '../components/IconFont';

const IconFont = createFromIconfontCN()

export default {
  name: 'ArrowDoubleLeftOutlined',
  displayName: 'ArrowDoubleLeftOutlined',
  functional: true,
  render: (h, { data, children }) =>
    h(
      IconFont,
      { ...data, props: { ...data.props, type: 'ArrowDoubleLeftOutlined' } },
      children
    ),
};