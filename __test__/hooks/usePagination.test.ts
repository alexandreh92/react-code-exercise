import { usePagination } from '../../src/hooks';
import mockMember from '../../__mocks__/member';

describe('usePagination', () => {
  const mockData = [mockMember, { ...mockMember, first_name: 'Foo' }];
  const filters = { first_name: 'Lamar' };

  describe('filter data based on filters passed', () => {
    it('when filters matches a result', () => {
      const result = usePagination({ data: mockData, filters });

      expect(result.currentData).toEqual([mockMember]);
    });

    it('when returns empty array', () => {
      const result = usePagination({
        data: mockData,
        filters: { first_name: 'Baz' },
      });

      expect(result.currentData).toEqual([]);
    });
  });

  it('returns totalPages', () => {
    const data = Array.from({ length: 10 }, (_, i) => ({ first_name: i }));

    const result = usePagination({ data, perPage: 2 });

    expect(result.totalPages).toEqual(5);
  });
});
