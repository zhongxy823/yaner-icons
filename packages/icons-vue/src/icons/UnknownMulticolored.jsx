import { default as createFromIconfontCN } from '../components/IconFont';

const IconFont = createFromIconfontCN()

export default {
  name: 'UnknownMulticolored',
  displayName: 'UnknownMulticolored',
  functional: true,
  render: (h, { data, children }) =>
    h(
      IconFont,
      { ...data, props: { ...data.props, type: 'UnknownMulticolored' } },
      children
    ),
};