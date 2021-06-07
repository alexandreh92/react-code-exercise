import { render } from '../test_utils';
import MapPin from '../../src/components/MapPin';

describe('MapPin', () => {
  it('sucessfully renders title', () => {
    const { getByTestId } = render(<MapPin lat={80.0} lng={50.0} />);
    const pin = getByTestId('pin');

    expect(pin).toBeInTheDocument();
  });
});
