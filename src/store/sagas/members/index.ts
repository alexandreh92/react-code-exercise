import { call, put, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { ISetPropAction, IState } from '~/store/ducks/members/types';
import api from '~/services/api';
import MembersActions from '~/store/ducks/members';

const { getMembersSuccess, setLoading } = MembersActions;

export function* getMembers({ params }: ISetPropAction): SagaIterator {
  try {
    yield put(setLoading(true));
    const { currentFilter }: IState = yield select(state => state.members);

    const filteredCongress = params.congress || currentFilter.congress;
    const filteredChamber = params.chamber || currentFilter.congress;

    const {
      data: { results },
    } = yield call(
      api.get,
      `${filteredCongress}/${filteredChamber}/members.json`,
    );

    const { members } = results[0];

    yield put(getMembersSuccess(members));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));

    // console.log
  }
}
