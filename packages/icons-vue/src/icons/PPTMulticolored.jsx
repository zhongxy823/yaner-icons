import { default as createFromIconfontCN } from '../components/IconFont';

const IconFont = createFromIconfontCN()

export default {
  name: 'PPTMulticolored',
  displayName: 'PPTMulticolored',
  functional: true,
  render: (h, { data, children }) =>
    h(
      IconFont,
      { ...data, props: { ...data.props, type: 'PPTMulticolored' } },
      children
    ),
};