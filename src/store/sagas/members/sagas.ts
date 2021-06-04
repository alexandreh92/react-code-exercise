import { takeLatest } from 'redux-saga/effects';

import { someAction } from '.';

import { MemberTypes } from '~/store/ducks/members/creators';

const sagas = [takeLatest(MemberTypes.ANY_ACTION, someAction)];

export default sagas;
