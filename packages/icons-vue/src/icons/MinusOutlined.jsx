import { default as createFromIconfontCN } from '../components/IconFont';

const IconFont = createFromIconfontCN()

export default {
  name: 'MinusOutlined',
  displayName: 'MinusOutlined',
  functional: true,
  render: (h, { data, children }) =>
    h(
      IconFont,
      { ...data, props: { ...data.props, type: 'MinusOutlined' } },
      children
    ),
};