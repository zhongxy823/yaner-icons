import { default as createFromIconfontCN } from '../components/IconFont';

const IconFont = createFromIconfontCN()

export default {
  name: 'SuccessFilled',
  displayName: 'SuccessFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      IconFont,
      { ...data, props: { ...data.props, type: 'SuccessFilled' } },
      children
    ),
};