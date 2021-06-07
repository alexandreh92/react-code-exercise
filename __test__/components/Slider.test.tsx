import { render } from '../test_utils';
import Slider from '../../src/components/Slider';

describe('Slider', () => {
  const props = {
    min: '0',
    max: '100',
    step: '1',
    value: '20',
  };

  it('assign min prop to input', () => {
    const { getByTestId } = render(<Slider readOnly {...props} />);

    expect(getByTestId('range-input')).toHaveAttribute('min', props.min);
  });

  it('assign max prop to input', () => {
    const { getByTestId } = render(<Slider readOnly {...props} />);

    expect(getByTestId('range-input')).toHaveAttribute('max', props.max);
  });

  it('assign value prop to input', () => {
    const { getByTestId } = render(<Slider readOnly {...props} />);

    expect(getByTestId('range-input')).toHaveAttribute('value', props.value);
  });

  it('assign step prop to input', () => {
    const { getByTestId } = render(<Slider readOnly {...props} />);

    expect(getByTestId('range-input')).toHaveAttribute('step', props.step);
  });

  it('render value prop in label', () => {
    const { getByTestId } = render(<Slider readOnly {...props} />);

    expect(getByTestId('range-label')).toHaveTextContent(props.value);
  });
});
