import { default as createFromIconfontCN } from '../components/IconFont';

const IconFont = createFromIconfontCN()

export default {
  name: 'ErMulticolored',
  displayName: 'ErMulticolored',
  functional: true,
  render: (h, { data, children }) =>
    h(
      IconFont,
      { ...data, props: { ...data.props, type: 'ErMulticolored' } },
      children
    ),
};