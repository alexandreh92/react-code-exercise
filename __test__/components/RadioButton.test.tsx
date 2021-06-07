import { render } from '../test_utils';
import RadioButton from '../../src/components/RadioButton';

describe('RadioButton', () => {
  const props = {
    name: 'Foo',
    label: 'Label',
    id: '1',
    value: 'check',
  };

  it('assign name prop to input', () => {
    const { getByTestId } = render(<RadioButton {...props} />);

    expect(getByTestId('radio-input')).toHaveAttribute('name', props.name);
  });

  it('assign id prop to input', () => {
    const { getByTestId } = render(<RadioButton {...props} />);

    expect(getByTestId('radio-input')).toHaveAttribute('id', props.id);
  });

  it('assign value prop to input', () => {
    const { getByTestId } = render(<RadioButton {...props} />);

    expect(getByTestId('radio-input')).toHaveAttribute('value', props.value);
  });

  it('assign htmlFor prop to label', () => {
    const { getByTestId } = render(<RadioButton {...props} />);

    expect(getByTestId('radio-label')).toHaveAttribute('for', props.id);
  });

  it('assign htmlFor prop to label', () => {
    const { getByTestId } = render(<RadioButton {...props} />);

    expect(getByTestId('radio-label')).toHaveTextContent(props.label);
  });
});
