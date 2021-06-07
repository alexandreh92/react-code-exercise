import {
  INITIAL_STATE,
  handleGetMembers,
  handleSetFilters,
  handleSetLoading,
} from '../../../src/store/ducks/members';
import mockMember from '../../../__mocks__/member';

describe('members reducers', () => {
  describe('handleGetMembers', () => {
    it('sets member to state', () => {
      expect(
        handleGetMembers(INITIAL_STATE, {
          members: [mockMember],
        }),
      ).toEqual({ ...INITIAL_STATE, members: [mockMember] });
    });
  });

  describe('handleSetFilters', () => {
    it('set chamber filter', () => {
      expect(
        handleSetFilters(INITIAL_STATE, {
          params: { chamber: 'house' },
        }),
      ).toEqual({
        ...INITIAL_STATE,
        currentFilter: { ...INITIAL_STATE.currentFilter, chamber: 'house' },
      });
    });

    it('set congress filter', () => {
      expect(
        handleSetFilters(INITIAL_STATE, {
          params: { congress: '116' },
        }),
      ).toEqual({
        ...INITIAL_STATE,
        currentFilter: { ...INITIAL_STATE.currentFilter, congress: '116' },
      });
    });
  });

  describe('handleSetLoading', () => {
    it('sets loading to true', () => {
      expect(
        handleSetLoading(INITIAL_STATE, {
          loading: true,
        }),
      ).toEqual({ ...INITIAL_STATE, loading: true });
    });

    it('sets loading to false', () => {
      expect(
        handleSetLoading(INITIAL_STATE, {
          loading: false,
        }),
      ).toEqual({ ...INITIAL_STATE, loading: false });
    });
  });
});
