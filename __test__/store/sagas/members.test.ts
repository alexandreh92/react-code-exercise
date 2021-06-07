import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import mockMember from '../../../__mocks__/member';
import api from '../../../src/services/api';
import { getMembers } from '../../../src/store/sagas/members';
import MembersActions from '../../../src/store/ducks/members';

const { getMembersSuccess, setLoading } = MembersActions;

const apiMock = new MockAdapter(api);

describe('Members Saga', () => {
  describe('getMembers', () => {
    it('triggers loading state', async () => {
      const dispatch = jest.fn();

      const params = { params: { chamber: 'house', congress: '116' } };

      apiMock.onGet().reply(200, { results: [{ members: [mockMember] }] });

      await runSaga({ dispatch }, getMembers, params).toPromise();

      expect(dispatch).toHaveBeenCalledWith(setLoading(true));
    });

    it('should be able to fetch members', async () => {
      const dispatch = jest.fn();

      const params = { params: { chamber: 'house', congress: '116' } };
      const state = { members: { currentFilter: {} } };

      apiMock.onGet('116').reply(200, { results: [{ members: [mockMember] }] });

      await runSaga(
        { dispatch, getState: () => state },
        getMembers,
        params,
      ).toPromise();

      expect(dispatch).toHaveBeenCalledWith(getMembersSuccess([mockMember]));
    });
  });
});
