import { render } from '../test_utils';
import FilterGroup from '../../src/components/FilterGroup';

describe('FilterGroup', () => {
  it('sucessfully renders title', () => {
    const title = 'Foo';

    const { getByText } = render(<FilterGroup title={title} />);
    const textEl = getByText(title);

    expect(textEl).toHaveTextContent(title);
  });
});
