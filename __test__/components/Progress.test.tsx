import { render } from '../test_utils';
import Progress from '../../src/components/Progress';

describe('Progress', () => {
  it('assign title', () => {
    const title = 'Foo';

    const { getByTestId } = render(<Progress title={title} />);

    expect(getByTestId('title')).toHaveTextContent(title);
  });

  it('assign value', () => {
    const { getByTestId } = render(<Progress value={100} />);

    expect(getByTestId('progress')).toHaveAttribute('value', '100');
  });

  it('assign max value', () => {
    const { getByTestId } = render(<Progress max={100} />);

    expect(getByTestId('progress')).toHaveAttribute('max', '100');
  });
});
