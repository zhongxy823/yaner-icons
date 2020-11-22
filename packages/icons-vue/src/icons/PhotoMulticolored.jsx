import { default as createFromIconfontCN } from '../components/IconFont';

const IconFont = createFromIconfontCN()

export default {
  name: 'PhotoMulticolored',
  displayName: 'PhotoMulticolored',
  functional: true,
  render: (h, { data, children }) =>
    h(
      IconFont,
      { ...data, props: { ...data.props, type: 'PhotoMulticolored' } },
      children
    ),
};