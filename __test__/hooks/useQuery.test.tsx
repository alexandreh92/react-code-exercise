import { render } from '@testing-library/react';

import { useQuery } from '../../src/hooks';

function setup() {
  const returnVal = {};
  function TestComponent() {
    Object.assign(returnVal, useQuery());
    return null;
  }
  render(<TestComponent />);
  return returnVal;
}

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useLocation: jest.fn().mockReturnValue({
    pathname: '/another-route',
    search: '?name=Foo&address=Baz',
    hash: '',
    state: null,
    key: '5nvxpbdafa',
  }),
}));

describe('useQuery', () => {
  it('returns query params as object', () => {
    const result = setup();
    expect(result).toEqual({ name: 'Foo', address: 'Baz' });
  });
});
