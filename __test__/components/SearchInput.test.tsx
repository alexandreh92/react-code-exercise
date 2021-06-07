import { render } from '../test_utils';
import SearchInput from '../../src/components/SearchInput';

describe('SearchInput', () => {
  const props = {
    defaultValue: 'check',
    name: 'Foo',
  };

  it('assign value prop to input', () => {
    const { getByTestId } = render(<SearchInput {...props} />);

    expect(getByTestId('search-input')).toHaveAttribute(
      'value',
      props.defaultValue,
    );
  });
});
