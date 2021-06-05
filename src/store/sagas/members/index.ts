import { call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { ISetPropAction } from '~/store/ducks/members/types';
import api from '~/services/api';
import MembersActions from '~/store/ducks/members';

const { getMembersSuccess } = MembersActions;

export function* getMembers({
  params: { congress, chamber },
}: ISetPropAction): SagaIterator {
  try {
    const {
      data: { results },
    } = yield call(api.get, `${congress}/${chamber}/members.json`);

    const { members } = results[0];

    yield put(getMembersSuccess(members));
  } catch (error) {
    console.log(error);
  }
}
