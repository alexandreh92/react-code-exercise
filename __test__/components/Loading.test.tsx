import { render } from '@testing-library/react';
import * as styled from 'styled-components';

import Loading from '../../src/components/Loading';

describe('Loading', () => {
  const mockTheme = { colors: { detail: '#fff' } } as styled.DefaultTheme;

  jest.spyOn(styled, 'useTheme').mockImplementation(() => mockTheme);

  it('renders props correctly', async () => {
    const { container } = render(<Loading />);

    const loader = container.querySelector('[aria-label="audio-loading"]');

    expect(loader).toHaveAttribute('stroke', '#fff');
  });
});
